import * as R from 'ramda';
import SpriteText from 'three-spritetext';
import { truncate } from './String';
import AttackPattern from '../resources/images/entities/attack-pattern_dark.svg';
import Campaign from '../resources/images/entities/campaign_dark.svg';
import Note from '../resources/images/entities/note_dark.svg';
import ObservedData from '../resources/images/entities/observed-data_dark.svg';
import Opinion from '../resources/images/entities/opinion_dark.svg';
import Report from '../resources/images/entities/report_dark.svg';
import CourseOfAction from '../resources/images/entities/course-of-action_dark.svg';
import Individual from '../resources/images/entities/individual_dark.svg';
import Organization from '../resources/images/entities/organization_dark.svg';
import Sector from '../resources/images/entities/sector_dark.svg';
import Indicator from '../resources/images/entities/indicator_dark.svg';
import Infrastructure from '../resources/images/entities/infrastructure_dark.svg';
import IntrusionSet from '../resources/images/entities/intrusion-set_dark.svg';
import City from '../resources/images/entities/city_dark.svg';
import Country from '../resources/images/entities/country_dark.svg';
import Region from '../resources/images/entities/region_dark.svg';
import Position from '../resources/images/entities/position_dark.svg';
import Malware from '../resources/images/entities/malware_dark.svg';
import ThreatActor from '../resources/images/entities/threat-actor_dark.svg';
import Tool from '../resources/images/entities/tool_dark.svg';
import Vulnerability from '../resources/images/entities/vulnerability_dark.svg';
import XOpenCTIIncident from '../resources/images/entities/incident_dark.svg';
import StixCyberObservable from '../resources/images/entities/stix-cyber-observable_dark.svg';
import { itemColor } from './Colors';
import Theme from '../components/ThemeDark';

const genImage = (src) => {
  const img = new Image();
  img.src = src;
  return img;
};

export const graphImages = {
  'Attack-Pattern': genImage(AttackPattern),
  Campaign: genImage(Campaign),
  Note: genImage(Note),
  'Observed-Data': genImage(ObservedData),
  Opinion: genImage(Opinion),
  Report: genImage(Report),
  'Course-Of-Action': genImage(CourseOfAction),
  Individual: genImage(Individual),
  Organization: genImage(Organization),
  Sector: genImage(Sector),
  Indicator: genImage(Indicator),
  Infrastructure: genImage(Infrastructure),
  'Intrusion-Set': genImage(IntrusionSet),
  City: genImage(City),
  Country: genImage(Country),
  Region: genImage(Region),
  Position: genImage(Position),
  Malware: genImage(Malware),
  'Threat-Actor': genImage(ThreatActor),
  Tool: genImage(Tool),
  Vulnerability: genImage(Vulnerability),
  'X-OpenCTI-Incident': genImage(XOpenCTIIncident),
  'Autonomous-System': genImage(StixCyberObservable),
  Directory: genImage(StixCyberObservable),
  'Domain-Name': genImage(StixCyberObservable),
  'Email-Addr': genImage(StixCyberObservable),
  'Email-Message': genImage(StixCyberObservable),
  'Email-Mime-Part-Type': genImage(StixCyberObservable),
  Artifact: genImage(StixCyberObservable),
  StixFile: genImage(StixCyberObservable),
  'X509-Certificate': genImage(StixCyberObservable),
  'IPv4-Addr': genImage(StixCyberObservable),
  'IPv6-Addr': genImage(StixCyberObservable),
  'Mac-Addr': genImage(StixCyberObservable),
  Mutex: genImage(StixCyberObservable),
  'Network-Traffic': genImage(StixCyberObservable),
  Process: genImage(StixCyberObservable),
  Software: genImage(StixCyberObservable),
  'User-Account': genImage(StixCyberObservable),
  Url: genImage(StixCyberObservable),
  'Windows-Registry-Key': genImage(StixCyberObservable),
  'Windows-Registry-Value-Type': genImage(StixCyberObservable),
  'X509-V3-Extensions-Type': genImage(StixCyberObservable),
  'X-OpenCTI-Cryptographic-Key': genImage(StixCyberObservable),
  'X-OpenCTI-Cryptocurrency-Wallet': genImage(StixCyberObservable),
  'X-OpenCTI-Hostname': genImage(StixCyberObservable),
  'X-OpenCTI-User-Agent': genImage(StixCyberObservable),
};

export const graphLevel = {
  'Attack-Pattern': 1,
  Campaign: 1,
  Note: 1,
  'Observed-Data': 1,
  Opinion: 1,
  Report: 1,
  'Course-Of-Action': 1,
  Individual: 1,
  Organization: 1,
  Sector: 1,
  Indicator: 1,
  Infrastructure: 1,
  'Intrusion-Set': 1,
  City: 1,
  Country: 1,
  Region: 1,
  Position: 1,
  Malware: 1,
  'Threat-Actor': 1,
  Tool: 1,
  Vulnerability: 1,
  'X-OpenCTI-Incident': 1,
  'Autonomous-System': 1,
  Directory: 1,
  'Domain-Name': 1,
  'Email-Addr': 1,
  'Email-Message': 1,
  'Email-Mime-Part-Type': 1,
  Artifact: 1,
  StixFile: 1,
  'X509-Certificate': 1,
  'IPv4-Addr': 1,
  'IPv6-Addr': 1,
  'Mac-Addr': 1,
  Mutex: 1,
  'Network-Traffic': 1,
  Process: 1,
  Software: 1,
  'User-Account': 1,
  Url: 1,
  'Windows-Registry-Key': 1,
  'Windows-Registry-Value-Type': 1,
  'X509-V3-Extensions-Type': 1,
  'X-OpenCTI-Cryptographic-Key': 1,
  'X-OpenCTI-Cryptocurrency-Wallet': 1,
  'X-OpenCTI-Hostname': 1,
  'X-OpenCTI-User-Agent': 1,
};

export const graphRawImages = {
  'Attack-Pattern': AttackPattern,
  Campaign,
  Note,
  'Observed-Data': ObservedData,
  Opinion,
  Report,
  'Course-Of-Action': CourseOfAction,
  Individual,
  Organization,
  Sector,
  Indicator,
  Infrastructure,
  'Intrusion-Set': IntrusionSet,
  City,
  Country,
  Region,
  Position,
  Malware,
  'Threat-Actor': ThreatActor,
  Tool,
  Vulnerability,
  'X-OpenCTI-Incident': XOpenCTIIncident,
  'Autonomous-System': StixCyberObservable,
  Directory: StixCyberObservable,
  'Domain-Name': StixCyberObservable,
  'Email-Addr': StixCyberObservable,
  'Email-Message': StixCyberObservable,
  'Email-Mime-Part-Type': StixCyberObservable,
  Artifact: StixCyberObservable,
  StixFile: StixCyberObservable,
  'X509-Certificate': StixCyberObservable,
  'IPv4-Addr': StixCyberObservable,
  'IPv6-Addr': StixCyberObservable,
  'Mac-Addr': StixCyberObservable,
  Mutex: StixCyberObservable,
  'Network-Traffic': StixCyberObservable,
  Process: StixCyberObservable,
  Software: StixCyberObservable,
  'User-Account': StixCyberObservable,
  Url: StixCyberObservable,
  'Windows-Registry-Key': StixCyberObservable,
  'Windows-Registry-Value-Type': StixCyberObservable,
  'X509-V3-Extensions-Type': StixCyberObservable,
  'X-OpenCTI-Cryptographic-Key': StixCyberObservable,
  'X-OpenCTI-Cryptocurrency-Wallet': StixCyberObservable,
  'X-OpenCTI-Hostname': StixCyberObservable,
  'X-OpenCTI-User-Agent': StixCyberObservable,
};

export const encodeGraphData = (graphData) => Buffer.from(JSON.stringify(graphData), 'ascii').toString('base64');

export const decodeGraphData = (encodedGraphData) => {
  if (encodedGraphData) {
    const decodedGraphData = JSON.parse(
      Buffer.from(encodedGraphData, 'base64').toString('ascii'),
    );
    if (typeof decodedGraphData === 'object') {
      return decodedGraphData;
    }
  }
  return {};
};

export const buildGraphData = (objects, graphData) => {
  const nodes = R.pipe(
    R.map((n) => n.node),
    R.filter((n) => !n.relationship_type),
    R.map((n) => ({
      id: n.id,
      val: graphLevel[n.entity_type],
      name: truncate(
        n.name || n.observable_value || n.attribute_abstract || n.opinion,
        20,
      ),
      img: graphImages[n.entity_type],
      rawImg: graphRawImages[n.entity_type],
      color: itemColor(n.entity_type, false),
      entity_type: n.entity_type,
      markedBy: R.map(
        (m) => ({ id: m.node.id, definition: m.node.definition }),
        n.objectMarking.edges,
      ),
      createdBy: n.createdBy
        ? n.createdBy
        : { id: '0533fcc9-b9e8-4010-877c-174343cb24cd', name: 'Unknown' },
      fx: graphData[n.id] && graphData[n.id].x ? graphData[n.id].x : null,
      fy: graphData[n.id] && graphData[n.id].y ? graphData[n.id].y : null,
    })),
  )(objects.edges);
  const links = R.pipe(
    R.map((n) => n.node),
    R.filter((n) => n.relationship_type),
    R.map((n) => ({
      id: n.id,
      source: n.from.id,
      target: n.to.id,
      name: n.relationship_type,
      source_id: n.from.id,
      target_id: n.to.id,
      start_time: n.start_time,
      stop_time: n.stop_time,
    })),
  )(objects.edges);
  return {
    nodes,
    links,
  };
};

export const buildNodeData = (entity, node = null) => ({
  id: entity.id,
  val: graphLevel[entity.entity_type],
  name: truncate(
    entity.name
      || entity.observable_value
      || entity.attribute_abstract
      || entity.opinion,
    20,
  ),
  img: graphImages[entity.entity_type],
  rawImg: graphRawImages[entity.entity_type],
  color: itemColor(entity.entity_type, false),
  entity_type: entity.entity_type,
  markedBy: R.map(
    (m) => ({ id: m.node.id, definition: m.node.definition }),
    entity.objectMarking.edges,
  ),
  createdBy: entity.createdBy
    ? entity.createdBy
    : { id: '0533fcc9-b9e8-4010-877c-174343cb24cd', name: 'Unknown' },
  fx: node && node.fx ? node.fx : undefined,
  fy: node && node.fy ? node.fy : undefined,
  x: node && node.x ? node.x : undefined,
  y: node && node.y ? node.y : undefined,
});

export const buildLinkData = (relation) => ({
  id: relation.id,
  source: relation.from.id,
  target: relation.to.id,
  name: relation.relationship_type,
  source_id: relation.from.id,
  target_id: relation.to.id,
  start_time: relation.start_time,
  stop_time: relation.stop_time,
});

export const applyFilters = (
  graphData,
  stixCoreObjectsTypes = [],
  markedBy = [],
  createdBy = [],
  excludedStixCoreObjectsTypes = [],
) => {
  const nodes = R.pipe(
    R.filter(
      (n) => excludedStixCoreObjectsTypes.length === 0
        || !R.includes(n.entity_type, excludedStixCoreObjectsTypes),
    ),
    R.filter(
      (n) => stixCoreObjectsTypes.length === 0
        || R.includes(n.entity_type, stixCoreObjectsTypes),
    ),
    R.filter(
      (n) => markedBy.length === 0
        || R.any((m) => R.includes(m.id, markedBy), n.markedBy),
    ),
    R.filter(
      (n) => createdBy.length === 0 || R.includes(n.createdBy.id, createdBy),
    ),
  )(graphData.nodes);
  const nodeIds = R.map((n) => n.id, nodes);
  const links = R.filter(
    (n) => R.includes(n.source_id, nodeIds) && R.includes(n.target_id, nodeIds),
    graphData.links,
  );
  return {
    nodes,
    links,
  };
};

export const nodePaint = (
  {
    name, img, x, y,
  },
  color,
  ctx,
  selected = false,
) => {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(x, y, 5, 0, 2 * Math.PI, false);
  ctx.fill();
  if (selected) {
    ctx.lineWidth = 0.8;
    ctx.strokeStyle = Theme.palette.primary.main;
    ctx.stroke();
  }
  const size = 8;
  ctx.drawImage(img, x - size / 2, y - size / 2, size, size);
  ctx.font = '4px Roboto';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(name, x, y + 10);
};

export const nodeAreaPaint = ({ name, x, y }, color, ctx) => {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(x, y, 5, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.font = '4px Roboto';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(name, x, y + 10);
};

export const linkPaint = (link, ctx) => {
  const start = link.source;
  const end = link.target;
  if (typeof start !== 'object' || typeof end !== 'object') return;
  const textPos = Object.assign(
    ...['x', 'y'].map((c) => ({
      [c]: start[c] + (end[c] - start[c]) / 2,
    })),
  );
  const relLink = { x: end.x - start.x, y: end.y - start.y };
  let textAngle = Math.atan2(relLink.y, relLink.x);
  if (textAngle > Math.PI / 2) textAngle = -(Math.PI - textAngle);
  if (textAngle < -Math.PI / 2) textAngle = -(-Math.PI - textAngle);
  const fontSize = 3;
  ctx.font = `${fontSize}px Roboto`;
  ctx.save();
  ctx.translate(textPos.x, textPos.y);
  ctx.rotate(textAngle);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(link.name, 0, 0);
  ctx.restore();
};

export const nodeThreePaint = (node) => {
  const sprite = new SpriteText(node.name);
  sprite.color = '#ffffff';
  sprite.textHeight = 1.5;
  return sprite;
};
