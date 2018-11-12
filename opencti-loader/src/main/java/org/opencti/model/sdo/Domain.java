package org.opencti.model.sdo;

import org.opencti.model.StixBase;
import org.opencti.model.StixElement;
import org.opencti.model.database.GraknRelation;

import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static java.lang.String.format;
import static org.opencti.model.utils.StixUtils.prepare;

public abstract class Domain extends StixBase {

    private List<GraknRelation> createMarkingRefs(Map<String, StixElement> stixElements) {
        return getObject_marking_refs().stream().map(marking -> {
            StixElement markingStix = stixElements.get(marking);
            if(markingStix == null) throw new RuntimeException("Cant find marking " + marking);
            return new GraknRelation(this, markingStix, "so", "marking", "object_marking_refs");
        }).collect(Collectors.toList());
    }

    List<GraknRelation> createCreatorRef(Map<String, StixElement> stixElements) {
        List<GraknRelation> relations = new ArrayList<>();
        if (getCreated_by_ref() != null) {
            StixElement stixCreator = stixElements.get(getCreated_by_ref());
            if(stixCreator == null) throw new RuntimeException("Cant find identity " + getCreated_by_ref());
            relations.add(new GraknRelation(this, stixCreator, "so", "creator", "created_by_ref"));
        }
        return relations;
    }

    String getLabelChain() {
        return getLabels().size() > 0 ? " " + getLabels().stream().map(value -> format("has stix_label %s", prepare(value)))
                .collect(Collectors.joining(" ")) : null;
    }

    @Override
    public List<StixElement> toStixElements() {
        List<StixElement> elements = new ArrayList<>();
        elements.add(this);
        List<ExternalReference> externalRefs = getExternal_references().stream()
                .filter(f -> f.getUrl() != null && f.getSource_name() != null)
                .collect(Collectors.toList());
        elements.addAll(externalRefs);
        return elements;
    }

    @Override
    public List<GraknRelation> extraRelations(Map<String, StixElement> stixElements) {
        List<GraknRelation> extraQueries = new ArrayList<>();
        //External refs
        extraQueries.addAll(createExternalRef());
        //Create the created_ref
        extraQueries.addAll(createCreatorRef(stixElements));
        //object_marking_refs
        extraQueries.addAll(createMarkingRefs(stixElements));
        return extraQueries;
    }

    private List<GraknRelation> createExternalRef() {
        return getExternal_references().stream()
                .filter(r -> r.getUrl() != null && r.getSource_name() != null)
                .map(r -> new GraknRelation(this, r, "so", "external_reference", "external_references"))
                .collect(Collectors.toList());
    }

    private String created;
    private String modified;
    private boolean revoked = false;
    private String created_by_ref;
    private List<String> labels = new ArrayList<>();
    private List<String> object_marking_refs = new ArrayList<>();
    private List<ExternalReference> external_references = new ArrayList<>();

    //region fields
    public List<String> getLabels() {
        return labels;
    }

    public void setLabels(List<String> labels) {
        this.labels = labels;
    }

    public String getCreated() {
        ZonedDateTime zonedDateTime = ZonedDateTime.parse(created);
        return zonedDateTime.format(DateTimeFormatter.ISO_LOCAL_DATE_TIME);
    }

    public void setCreated(String created) {
        this.created = created;
    }

    public String getModified() {
        ZonedDateTime zonedDateTime = ZonedDateTime.parse(modified);
        return zonedDateTime.format(DateTimeFormatter.ISO_LOCAL_DATE_TIME);
    }

    public void setModified(String modified) {
        this.modified = modified;
    }

    public boolean getRevoked() {
        return revoked;
    }

    public void setRevoked(Boolean revoked) {
        this.revoked = revoked;
    }

    public String getCreated_by_ref() {
        return created_by_ref;
    }

    public void setCreated_by_ref(String created_by_ref) {
        this.created_by_ref = created_by_ref;
    }

    public List<String> getObject_marking_refs() {
        return object_marking_refs;
    }

    public void setObject_marking_refs(List<String> object_marking_refs) {
        this.object_marking_refs = object_marking_refs;
    }

    public List<ExternalReference> getExternal_references() {
        return external_references;
    }

    public void setExternal_references(List<ExternalReference> external_references) {
        this.external_references = external_references;
    }
    //endregion
}