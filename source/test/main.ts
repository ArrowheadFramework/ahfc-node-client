import * as dns from "./dns";
import * as unit from "./unit";

const tester = new unit.ConsoleTester({ verbose: true });

tester.register(dns.UnitResourceData);

tester.run().then(status => process.exit(status));