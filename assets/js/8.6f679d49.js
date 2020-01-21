(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{218:function(t,s,e){t.exports=e.p+"assets/img/storage1.7be5d2bb.png"},219:function(t,s,e){t.exports=e.p+"assets/img/storage2.b49cb9dd.png"},235:function(t,s,e){"use strict";e.r(s);var a=e(2),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_3-add-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-add-database"}},[t._v("#")]),t._v(" 3. Add database")]),t._v(" "),a("p",[t._v("Now that we have everything set up for our application code and deployment, we can go on with the more serious stuff and add a database instead of using hardcoded data.")]),t._v(" "),a("h2",{attrs:{id:"configure-table-storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-table-storage"}},[t._v("#")]),t._v(" Configure Table Storage")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://docs.microsoft.com/azure/storage/tables/table-storage-overview?WT.mc_id=nitro-workshop-yolasors",target:"_blank",rel:"noopener noreferrer"}},[t._v("Table Storage"),a("OutboundLink")],1),t._v(" is a simple NoSQL key/value data store that will allow you to save and retrieve data.")]),t._v(" "),a("p",[t._v("You already created a storage account in the previous step, so you now have to generate an access token to allow our application to manipulate data in it:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Get the storage account connection string")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Use here the storage account name you set in the previous step")]),t._v("\naz storage account show-connection-string --name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your_storage_account_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Generate the SAS key")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# It will be valid until the defined expiry date")]),t._v("\naz storage account generate-sas --account-name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your_storage_account_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n                                --services btf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n                                --resource-types sco "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n                                --permissions acdlrw --expiry "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-12-31\n")])])]),a("p",[t._v("Now edit the file "),a("code",[t._v("local.settings.json")]),t._v(", and add these properties to the "),a("code",[t._v("Values")]),t._v(" list:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"AZURE_STORAGE_ACCOUNT"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<your storage account name>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"AZURE_STORAGE_CONNECTION_STRING"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<your storage account connection string>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"AZURE_STORAGE_SAS_KEY"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<your SAS key>"')]),t._v("\n")])])]),a("p",[t._v("Remove this line as it's not needed:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"AzureWebJobsStorage"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("These values will be exposed to our app as "),a("strong",[t._v("environment variables")]),t._v(" by the Functions runtime, to allow access to your Azure storage.")]),t._v(" "),a("h2",{attrs:{id:"integrate-with-nestjs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#integrate-with-nestjs"}},[t._v("#")]),t._v(" Integrate with NestJS")]),t._v(" "),a("p",[t._v("You are now ready to integrate the database with your NestJS application. First, you have to install the "),a("code",[t._v("@nestjs/azure-database")]),t._v(" package with this command:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @nestjs/azure-database\n")])])]),a("p",[t._v("Open the file "),a("code",[t._v("src/app.module.ts")]),t._v(" and add the "),a("code",[t._v("AzureTableStorageModule")]),t._v(" to the module imports:")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[t._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  imports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    AzureTableStorageModule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forFeature")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Story"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'stories'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      createTableIfNotExists"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("Don't forget to add the missing imports at the top:")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" AzureTableStorageModule "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@nestjs/azure-database'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Story "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./stories/story.entity'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("But hey, we don't have a "),a("code",[t._v("Story")]),t._v(" entity yet? That's right, let's create it!")]),t._v(" "),a("h2",{attrs:{id:"create-an-entity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-an-entity"}},[t._v("#")]),t._v(" Create an entity")]),t._v(" "),a("p",[t._v("A database entity is used to model the properties of whatever object you would like to store. In our case, we would like to store fun pets stories, so let's create define a "),a("code",[t._v("Story")]),t._v(" entity.")]),t._v(" "),a("p",[t._v("Create a new file "),a("code",[t._v("src/stories/story.entity.ts")]),t._v(" with this code:")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[t._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("EntityPartitionKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'stories'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("EntityRowKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Story")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("EntityString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" animal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("EntityString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("EntityString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" imageUrl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("EntityDateTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" createdAt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("story"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Partial"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Story"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assign")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" story"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Now let's break down the annotations we have used:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("@EntityPartitionKey")]),t._v(" defines the table storage "),a("a",{attrs:{href:"https://docs.microsoft.com/rest/api/storageservices/understanding-the-table-service-data-model?WT.mc_id=nitro-workshop-yolasors#partitionkey-property",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("PartitionKey")]),a("OutboundLink")],1),t._v(" which can be used to for load balancing across storage nodes.")]),t._v(" "),a("li",[a("code",[t._v("@EntityRowKey")]),t._v(" is the unique identifier of an entity with a given partition.")]),t._v(" "),a("li",[t._v("The entity types annotations such as "),a("code",[t._v("@EntityString")]),t._v(" represent the data type of each property.\nYou can find here the complete list of "),a("a",{attrs:{href:"https://docs.microsoft.com/dotnet/framework/data/adonet/entity-data-model-primitive-data-types?WT.mc_id=nitro-workshop-yolasors",target:"_blank",rel:"noopener noreferrer"}},[t._v("Entity Data Model types"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"inject-the-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inject-the-service"}},[t._v("#")]),t._v(" Inject the service")]),t._v(" "),a("p",[t._v("The next step is to inject the service that provides methods to perform CRUD operations on entities. The "),a("code",[t._v("@nestjs/azure-database")]),t._v(" package gives you just that, using the annotation "),a("code",[t._v("@InjectRepository")]),t._v(".")]),t._v(" "),a("p",[t._v("Open the file "),a("code",[t._v("src/stories/stories.controller.ts")]),t._v(" and add this constructor:")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[t._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Controller")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'stories'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StoriesController")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("InjectRepository")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Story"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" storiesRepository"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Repository"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Story"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Don't forget to add these missing imports at the top of the file:")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" InjectRepository"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Repository "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@nestjs/azure-database'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Story "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./story.entity'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("You can now use "),a("code",[t._v("this.storiesRepositoy")]),t._v(" within your controller to perform "),a("a",{attrs:{href:"https://github.com/nestjs/azure-database#crud-operations",target:"_blank",rel:"noopener noreferrer"}},[t._v("CRUD operations"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("create(entity: T, rowKeyValue?: string): Promise<T>")]),t._v(": creates a new entity (if rowKeyValue is null, a UUID will be generated).")]),t._v(" "),a("li",[a("code",[t._v("find(rowKey: string, entity: Partial<T>): Promise<T>")]),t._v(": finds one entity using its RowKey.")]),t._v(" "),a("li",[a("code",[t._v("findAll(tableQuery?: azure.TableQuery, currentToken?: azure.TableService.TableContinuationToken): Promise<AzureTableStorageResultList<T>>")]),t._v(": finds all entities that match the given query (return all entities if no query provided).")]),t._v(" "),a("li",[a("code",[t._v("update(rowKey: string, entity: Partial<T>): Promise<T>")]),t._v(": Updates an entity. It does a partial update.")]),t._v(" "),a("li",[a("code",[t._v("delete(rowKey: string, entity: T): Promise<AzureTableStorageResponse>")]),t._v(": Removes an entity from the database.")])]),t._v(" "),a("h2",{attrs:{id:"add-new-endpoints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-new-endpoints"}},[t._v("#")]),t._v(" Add new endpoints")]),t._v(" "),a("p",[t._v("Now you have everything needed to create new endpoints to create and get stories:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("GET /stories/:id  // Get the story with the specified ID\nGET /stories      // Get all stories\nPOST /stories     // Create a new story\n")])])]),a("p",[t._v("Let's start with the first one, to retrieve a single story using its ID.\nAdd this method to your controller:")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[t._v("  @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("':id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Param")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Story"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("storiesRepository"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Story")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Entity not found")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NotFoundException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("We use the "),a("code",[t._v("@Get()")]),t._v(" annotation like in "),a("router-link",{attrs:{to:"/step1.html#Add-your-first-endpoint"}},[t._v("Step 1")]),t._v(", but this time specified a "),a("a",{attrs:{href:"https://docs.nestjs.com/controllers#route-parameters",target:"_blank",rel:"noopener noreferrer"}},[t._v("route parameter"),a("OutboundLink")],1),t._v(" using "),a("code",[t._v(":id")]),t._v(".\nThis parameter can then be retrieved with the function arguments using the "),a("code",[t._v("@Param('id')")]),t._v(" annotation.")],1),t._v(" "),a("p",[t._v("Then we call the "),a("code",[t._v("storiesRepository.find()")]),t._v(" method to find the matching entity. In case it's not found, we catch the error and return a status "),a("code",[t._v("404")]),t._v(" error using NestJS  predefined exception class "),a("code",[t._v("NotFoundException")]),t._v(".")]),t._v(" "),a("p",[t._v("After that, it's time for you to work a bit by yourself to add the 2 remaining endpoints 😉.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("For the create endpoint, if the property "),a("code",[t._v("createdAt")]),t._v(" is not set, it should be added with the current date.")])]),t._v(" "),a("p",[t._v("If you're stuck, you may find some help in the "),a("a",{attrs:{href:"https://docs.nestjs.com/controllers#full-resource-sample",target:"_blank",rel:"noopener noreferrer"}},[t._v("NestJS documentation"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://github.com/nestjs/azure-database#crud-operations",target:"_blank",rel:"noopener noreferrer"}},[t._v("@nestjs/azure-database documentation"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"test-your-endpoints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-your-endpoints"}},[t._v("#")]),t._v(" Test your endpoints")]),t._v(" "),a("p",[t._v("After you finished adding the new endpoints, start your server using the functions emulator:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run start:azure\n")])])]),a("p",[t._v("After the server is started, you can test if your new endpoints behave correctly using "),a("code",[t._v("curl")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" http://localhost:7071/api/stories\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# should return an empty list: []")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" http://localhost:7071/api/stories/0\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# should return 404 with an error")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" http://localhost:7071/api/stories "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -X POST "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"content-type: application/json"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -d "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{ "animal": "cat", "description": "Cats have supersonic hearing" }\'')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# should return the newly created story")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" http://localhost:7071/api/stories\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# should return a list with the previously added story")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" http://localhost:7071/api/stories/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("RowKey_from_post_command"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# should return this single story")]),t._v("\n")])])]),a("h2",{attrs:{id:"explore-your-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#explore-your-data"}},[t._v("#")]),t._v(" Explore your data")]),t._v(" "),a("p",[t._v("As you should have created to stories at this point, why not take a look a the data you have created?")]),t._v(" "),a("p",[t._v("You can either use the standalone "),a("a",{attrs:{href:"https://azure.microsoft.com/features/storage-explorer/?WT.mc_id=nitro-workshop-yolasors",target:"_blank",rel:"noopener noreferrer"}},[t._v("Storage Explorer application"),a("OutboundLink")],1),t._v(" for that, or go to the Azure portal and access the online version.")]),t._v(" "),a("p",[t._v("We only want to give a quick look, so let's use the online version:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Open "),a("a",{attrs:{href:"https://portal.azure.com?WT.mc_id=nitro-workshop-yolasors",target:"_blank",rel:"noopener noreferrer"}},[t._v("portal.azure.com"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("Use the search bar at the top and enter the name of the storage account you created, then click on it in the search results:\n"),a("img",{attrs:{src:e(218),alt:"searching your storage account"}})])]),t._v(" "),a("li",[a("p",[t._v("Click on "),a("strong",[t._v("Storage Explorer")]),t._v(" in the resource menu, then unfold the "),a("strong",[t._v("TABLES")]),t._v(" item to open the "),a("code",[t._v("stories")]),t._v(" container where your data lives in:\n"),a("img",{attrs:{src:e(219),alt:"storage explorer"}})])])]),t._v(" "),a("p",[t._v("From there, you can query your stories, edit or delete them and even create new ones.\nThis tool can be helpful to quickly check your data visually and debug things when something's wrong.")]),t._v(" "),a("h2",{attrs:{id:"redeploy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redeploy"}},[t._v("#")]),t._v(" Redeploy")]),t._v(" "),a("p",[t._v("Now that everything works locally, let's deploy your latest changes:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Build your app")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Create an archive from your local files and publish it")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Don't forget to change the name with the one you used previously")]),t._v("\nfunc azure functionapp publish funpets-api "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --nozip "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --publish-local-settings\n")])])]),a("p",[t._v("Notice that this time we added the "),a("code",[t._v("--publish-local-settings")]),t._v(" option to update the")]),t._v(" "),a("p",[t._v("Then invoke one of the newer API to check that deployment went fine:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your-funpets-api"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".azurewebsites.net/api/stories\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);