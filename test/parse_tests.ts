import { XML } from "../src/xml.ts";

const sourceXML = `<?xml version="1.0" encoding="utf-8" ?>
<invoke listener="setMemberList">
    <parameter name="application" type="string">simulation</parameter>
    <parameter name="sequence" type="number">3</parameter>
    <parameter name="memberList" type="XML">
        <memberList>
            <member id="samchon" email="samchon@samchon.org" name="Jeongho Nam" />
            <member id="github" email="github@github.com" name="GitHub" />
            <member id="robot" email="google@google.com" name="AlphaGo" />
        </memberList>
    </parameter>
</invoke>`;

Deno.test("Sanity Test", () => {
    let xml = new XML(sourceXML);
});

Deno.test("Properties", () => {
    let xml = new XML(sourceXML);
    let list = xml.get("parameter");
    console.log
    (
        list?.at(0).getProperty("name"), // "application"
        list?.at(0).getProperty("type"),  // "string"
        list?.at(0).getValue() // "simulation"
    );
});

Deno.test("Members", () => {
    let xml = new XML(sourceXML);
    let members = xml?.get("parameter")?.at(2)
        ?.get("memberList")?.at(0)
        .get("member");

    // PRINT PROPERTIES
    console.log
    (
        members?.at(0).getProperty("id"), // "samchon"
        members?.at(1).getProperty("email"), // "github@github.com"
        members?.at(2).getProperty("name") // "Alphago
    );
});