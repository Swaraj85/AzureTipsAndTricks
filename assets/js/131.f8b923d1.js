(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{427:function(t,s,a){"use strict";a.r(s);var e=a(43),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/logic-apps/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Logic Apps Documentation"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("p",[t._v("This post brought to you by "),a("a",{attrs:{href:"https://twitter.com/afnw35342",target:"_blank",rel:"noopener noreferrer"}},[t._v("afnw35342"),a("OutboundLink")],1),t._v(". His LinkedIn profile is "),a("a",{attrs:{href:"https://www.linkedin.com/in/alexfleming-solutionarchitect/",target:"_blank",rel:"noopener noreferrer"}},[t._v("available here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h4",{attrs:{id:"explicitly-name-logic-api-connections-in-arm-templates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#explicitly-name-logic-api-connections-in-arm-templates","aria-hidden":"true"}},[t._v("#")]),t._v(" Explicitly Name Logic API Connections in ARM Templates")]),t._v(" "),a("p",[t._v("When creating Logic App API Connections, Azure defaults to rather bland, non-descriptive names such as "),a("code",[t._v("office365")]),t._v(" or "),a("code",[t._v("keyvault")]),t._v(". After creating a few of them, positively identifying them gets confusing. (Separate connections should be created as each Logic App should have a unique, system-assigned identity.)")]),t._v(" "),a("h4",{attrs:{id:"_1-edit-the-connection-specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-edit-the-connection-specification","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. Edit the Connection Specification")]),t._v(" "),a("p",[t._v("In the example below, the "),a("code",[t._v("name")]),t._v(" and "),a("code",[t._v("displayName")]),t._v(" segments are changed to calculated values using "),a("code",[t._v("[variables('vEmailSender')]")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-JSON line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Microsoft.Web/connections"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"apiVersion"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2016-06-01"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"[variables('vEmailSender')]\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"location"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"[parameters('pLocation')]\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"properties"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"api"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"[concat(subscription().id, '/providers/Microsoft.Web/locations/', parameters('pLocation'), '/managedApis/office365')]\"")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"displayName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"[variables('vEmailSender')]\"")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[t._v("(Parameters are equally valid here.)")]),t._v(" "),a("p",[t._v("It can cause confusion that both the "),a("code",[t._v("name")]),t._v(" and "),a("code",[t._v("displayName")]),t._v(" segments also default to "),a("code",[t._v("office365")]),t._v(". Do not change the "),a("code",[t._v("api/id")]),t._v(" segment!")]),t._v(" "),a("h4",{attrs:{id:"_2-modify-the-dependson-segment-of-the-logic-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-modify-the-dependson-segment-of-the-logic-app","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. Modify the "),a("code",[t._v("dependsOn")]),t._v(" segment of the Logic App")]),t._v(" "),a("div",{staticClass:"language-JSON line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ...\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dependsOn"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"[resourceId('Microsoft.Web/connections', variables('vEmailSender'))]\"")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    ...\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h4",{attrs:{id:"_3-modify-the-connections-used-by-the-logic-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-modify-the-connections-used-by-the-logic-app","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. Modify the "),a("code",[t._v("$connections")]),t._v(" used by the Logic App")]),t._v(" "),a("p",[t._v("The connection definition used in the Logic App must match the resource definition in (1).")]),t._v(" "),a("div",{staticClass:"language-JSON line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"$connections"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"office365"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"connectionId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"[resourceId('Microsoft.Web/connections', variables('vEmailSender'))]\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"connectionName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"[variables('vEmailSender')]\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"[concat(subscription().id, '/providers/Microsoft.Web/locations/',parameters('pLocation'),'/managedApis/office365')]\"")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("Notice how "),a("code",[t._v("connectionId")]),t._v(" is a concatenation of the resource type and name, and the "),a("code",[t._v("id")]),t._v(" is the same as the "),a("code",[t._v("api/id")]),t._v(".")]),t._v(" "),a("h4",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),a("p",[t._v("It wasn't entirely clear what specifically needed changing in what locations to modify the defaults. Hopefully, this tip will save you the hit-n-miss process I went through.")])])},[],!1,null,null,null);s.default=n.exports}}]);