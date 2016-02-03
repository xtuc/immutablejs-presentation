import Immutable from "immutable"

export default class IPv4Packet extends Immutable.Record({
	Version: 4,
	IPHeaderLength: null,
	TypeofService: null,
	SizeofDatagram: null,
	Identification: null,
	Flags: null,
	FragmentationOffset: null,
	TimeToLive: null,
	Protocol: null,
	HeaderChecksum: null,
	SourceAddress: null,
	DestinationAddress: null
}) {
	//
}

var res = new IPv4Packet()
				.set("Version", 5);

var resJSON = res.toJSON();

console.log(new IPv4Packet(resJSON));