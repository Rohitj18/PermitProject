const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HeaderSchema = new Schema({
  _id: false,
  department: {
    type: String,
    required: true,
  },
  personInCharge1: {
    type: String,
    required: true,
  },
  headerDate: {
    type: String,
    required: true,
  },
});

const DurationPermit = new Schema({
  _id: false,
  dateStart: {
    type: Date,
    required: true,
  },
  dateEnd: {
    type: Date,
    required: true,
  },
  timeStart: {
    type: Number,
    require: true,
  },
  timeEnd: {
    type: Number,
    required: true,
  },
});

// Basic info Schema
const BasicInfoSchema = new Schema({
  _id: false,
  activityDescription: {
    type: String,
    required: true,
  },
  entrySpace: {
    type: String,
    required: true,
  },
  personInCharge2: {
    type: String,
    required: true,
  },
  permitno: {
    type: Number,
  },
  jobLocation: {
    type: String,
    required: true,
  },
  durationPermit: DurationPermit,
});

const AuthorizedAttendants = new Schema({
  _id: false,
  aaName1: {
    type: String,
    required: true,
  },
  aaPhone1: {
    type: Number,
    required: true,
  },
  aaName2: {
    type: String,
    required: true,
  },
  aaPhone2: {
    type: Number,
    required: true,
  },
});

const AuthorizedEntrants = new Schema({
  _id: false,
  aeName1: {
    type: String,
    required: true,
  },
  aePhone1: {
    type: Number,
    required: true,
  },
  aeName2: {
    type: String,
    required: true,
  },
  aePhone2: {
    type: Number,
    required: true,
  },
});

const RescueTeam = new Schema({
  _id: false,
  rtName1: {
    type: String,
    required: true,
  },
  rtPhone1: {
    type: Number,
    required: true,
  },
  rtName2: {
    type: String,
    required: true,
  },
  rtPhone2: {
    type: Number,
    required: true,
  },
});

const PersonnelSchema = new Schema({
  _id: false,
  authorizedAttendants: AuthorizedAttendants,
  authorizedEntrants: AuthorizedEntrants,
  rescueTeam: RescueTeam,
});

const IsolationSchema = new Schema({
  _id: false,
  isolate: {
    type: String,
    required: true,
  },
  device: {
    type: String,
    required: true,
  },
  mechanical: {
    type: String,
  },
  naturalVentilationOnly: {
    type: String,
  },
});

const HazardSchema = new Schema({
  _id: false,
  toxicAtmosphere: {
    type: Boolean,
    default: false,
  },
  engulfment: {
    type: Boolean,
    default: false,
  },
  mechanicalHazards: {
    type: Boolean,
    default: false,
  },
  heat: {
    type: Boolean,
    default: false,
  },
  o2Deficient: {
    type: Boolean,
    default: false,
  },
  asphyxiationEntrapment: {
    type: Boolean,
    default: false,
  },
  pressurizedWater: {
    type: Boolean,
    default: false,
  },
  other: {
    type: Boolean,
    default: false,
  },
  otherText: {
    type: String,
  },
  initial: {
    type: String,
  },
  isolationSchema: IsolationSchema,
});

const EquipmentSchema = new Schema({
  _id: false,
  directReadingGasMonitor: {
    type: String,
  },
  hoistingEquipment: {
    type: String,
  },
  entryStand: {
    type: String,
  },
  electricEqui: {
    type: String,
  },
  class: {
    type: String,
  },
  safetyHarness: {
    type: String,
  },
  poweredCommunication: {
    type: String,
  },
  protectedClothing: {
    type: String,
  },
  ventilationSystem: {
    type: String,
  },
});

// incomplete
const TestingRecordSchema = new Schema({
  _id: false,
  permitReclassify: {
    type: Boolean,
    default: false,
  },
});

const PermitPrepared = new Schema({
  _id: false,
  ppName: {
    type: String,
    required: true,
  },
  ppSignature: {
    type: String,
  },
  ppDate: {
    type: Date,
    required: true,
  },
  ppTime: {
    type: Number,
    required: true,
  },
});

const PermitApproved = new Schema({
  _id: false,
  paName: {
    type: String,
    required: true,
  },
  paSignature: {
    type: String,
  },
  paDate: {
    type: Date,
    required: true,
  },
  paTime: {
    type: Number,
    required: true,
  },
});

const ReviewHead = new Schema({
  _id: false,
  rhName: {
    type: String,
    required: true,
  },
  rhSignature: {
    type: String,
  },
  rhDate: {
    type: Date,
    required: true,
  },
  rhTime: {
    type: Number,
    required: true,
  },
});

const OrganizationSchema = new Schema({
  _id: false,
  precaution: {
    type: Boolean,
    default: false,
  },
  permitPrepared: PermitPrepared,
  permitApproved: PermitApproved,
  reviewHead: ReviewHead,
});

const PermitCloseSchema = new Schema({
  _id: false,
  permissionWithdraw: {
    type: Boolean,
    default: null,
  },
});

const FormSchema = new Schema({
  header: HeaderSchema,
  part1: BasicInfoSchema,
  part2: PersonnelSchema,
  part3: HazardSchema,
  part5: EquipmentSchema,
  part6: TestingRecordSchema,
  part7: OrganizationSchema,
  part8: PermitCloseSchema,
});

// const Form = mongoose.model("form", FormSchema);
const Form = mongoose.model("Header", FormSchema);
module.exports = Form;
