(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{538:function(e,r,t){"use strict";t.r(r);var a=t(43),s=Object(a.a)({},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("💡 Learn more : "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/virtual-machines/windows/sql/virtual-machines-windows-sql-server-iaas-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("SQL Server on Azure Virtual Machines"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("h4",{attrs:{id:"implementing-azure-search-with-sql-server-and-asp-net-mvc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementing-azure-search-with-sql-server-and-asp-net-mvc","aria-hidden":"true"}},[e._v("#")]),e._v(" Implementing Azure Search with SQL Server and ASP.NET MVC")]),e._v(" "),t("p",[e._v("In this series I'll cover Azure Search, SQL Server and putting it all together in a ASP.NET MVC web app. The complete list can be found below:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip90.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Part 1 - Implementing Azure Search with SQL Server and ASP.NET MVC"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip91.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Part 2 - Implementing Azure Search with SQL Server"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip92.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Part 3 - Querying an Azure Search Index"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip93.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Part 4 - Searching an index with Azure Search with C#"),t("OutboundLink")],1)])]),e._v(" "),t("h4",{attrs:{id:"implementing-azure-search"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementing-azure-search","aria-hidden":"true"}},[e._v("#")]),e._v(" Implementing Azure Search")]),e._v(" "),t("p",[e._v("This week we've learned that Azure Search is a search-as-a-service that connects to a variety of data sources such as SQL Server. We've created our SQL Server DB, and stood up Azure Search and now it is time to query the indexes. In this section, I'll give you some basic commands that should help get you started.")]),e._v(" "),t("p",[e._v("Open the Azure Portal, and search for "),t("strong",[e._v("Search Services")]),e._v(" and click on the "),t("strong",[e._v("Search Services")]),e._v(" tab as shown below.")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/azsearchfilter1.png")}}),e._v(" "),t("p",[e._v("Basic Search - I can type "),t("code",[e._v("search=john")]),e._v(" and pressing "),t("strong",[e._v("Search")]),e._v(" to search the entire index for the word john.")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/azsearchfilter2.gif")}}),e._v(" "),t("p",[e._v("Append strings - I can append onto the string with the "),t("strong",[e._v("&")]),e._v(" to pass additional search parameters, which can be specified in any order. For example, the  $count=true parameter returns a sum of all the documents that match the query. Make note that this is using OData.")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/azsearchfilter3.png")}}),e._v(" "),t("p",[e._v("Return top # - You can even pass "),t("strong",[e._v("$top=2")]),e._v(" to return the highest ranked 2 documents.")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/azsearchfilter4.png")}}),e._v(" "),t("p",[e._v("Filtering - You can use the "),t("strong",[e._v("$filter")]),e._v(" parameter to return results matching the criteria you provided. For example, "),t("code",[e._v("$filter FirstName eq 'Robert'")]),e._v(" would return any person in the index that has a FirstName that equals Robert. There are many other comparison expressions (such as eq, ne, gt, lt, ge, le).")]),e._v(" "),t("p",[e._v("Order-by syntax - You can use the "),t("strong",[e._v("$orderby")]),e._v(" parameter to order the results by. You can use either asc or desc to explicitly specify the sort order. By default, it will use the sort order as ascending.")]),e._v(" "),t("p",[e._v("I'd encourage you to view the "),t("a",{attrs:{href:"https://docs.microsoft.com/rest/api/searchservice/odata-expression-syntax-for-azure-search?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("OData Expression Syntax for Azure Search"),t("OutboundLink")],1),e._v(" for a full list and other samples that you can use.")])])},[],!1,null,null,null);r.default=s.exports}}]);