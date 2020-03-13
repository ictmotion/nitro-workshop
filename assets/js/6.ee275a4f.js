(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{181:function(e,t,o){e.exports=o.p+"assets/img/remote-open.29f02732.png"},182:function(e,t,o){e.exports=o.p+"assets/img/remote-status.ce80a62c.png"},240:function(e,t,o){"use strict";o.r(t);var r=o(10),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"_0-prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_0-prerequisites"}},[e._v("#")]),e._v(" 0. Prerequisites")]),e._v(" "),r("h2",{attrs:{id:"install-required-tools"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#install-required-tools"}},[e._v("#")]),e._v(" Install required tools")]),e._v(" "),r("p",[e._v("To follow this workshop, you need these to have these tools installed:")]),e._v(" "),r("ul",[r("li",[e._v("A working "),r("a",{attrs:{href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),r("OutboundLink")],1),e._v(" environment (latest LTS version recommended, "),r("strong",[e._v("don't use v13")]),e._v("). If you use MacOS I suggest using "),r("a",{attrs:{href:"https://github.com/Schniz/fnm",target:"_blank",rel:"noopener noreferrer"}},[e._v("FNM"),r("OutboundLink")],1),e._v(" to install Node.js instead of the package installer, to avoid permissions issues.")]),e._v(" "),r("li",[e._v("The "),r("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/install-azure-cli?view=azure-cli-latest&WT.mc_id=nitro-workshop-yolasors",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure CLI"),r("OutboundLink")],1),e._v(" to create resources on Azure. If you do not want to install it locally, you can use "),r("a",{attrs:{href:"https://shell.azure.com/?WT.mc_id=nitro-workshop-yolasors",target:"_blank",rel:"noopener noreferrer"}},[e._v("shell.azure.com"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/functions-run-local#v2?WT.mc_id=nitro-workshop-yolasors",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Functions Core Tools v2"),r("OutboundLink")],1),e._v(" to test your functions locally.")]),e._v(" "),r("li",[e._v("A code editor of your choice. If you don't have any code editor installed on your machine, you can install "),r("a",{attrs:{href:"https://code.visualstudio.com?WT.mc_id=nitro-workshop-yolasors",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio Code"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h3",{attrs:{id:"alternative-using-docker-and-visual-studio-code"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#alternative-using-docker-and-visual-studio-code"}},[e._v("#")]),e._v(" Alternative: using Docker and Visual Studio Code")]),e._v(" "),r("p",[e._v("If you have Docker and Visual Studio Code installed on your machine, you can use the "),r("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack&WT.mc_id=nitro-workshop-yolasors",target:"_blank",rel:"noopener noreferrer"}},[e._v("Remote Development extension"),r("OutboundLink")],1),e._v(" and a pre-made Docker image with everything needed installed.")]),e._v(" "),r("ol",[r("li",[e._v("Install the VS Code extension:")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("code --install-extension ms-vscode-remote.vscode-remote-extensionpack\n")])])]),r("ol",{attrs:{start:"2"}},[r("li",[e._v("Unzip "),r("a",{attrs:{href:"./devcontainer.zip"}},[e._v("this file")]),e._v(" in your project folder")]),e._v(" "),r("li",[e._v("Open your project folder in VS Code, then click "),r("code",[e._v("Reload in container")]),e._v(" when you see this popup:\n"),r("img",{attrs:{src:o(181),alt:"remote extension popup"}})]),e._v(" "),r("li",[e._v("Once the Docker image is built (it might take a few minutes), you should see this in the left part of the status bar\n"),r("img",{attrs:{src:o(182),alt:"remote extension status command"}})])]),e._v(" "),r("h2",{attrs:{id:"configure-your-azure-account"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configure-your-azure-account"}},[e._v("#")]),e._v(" Configure your Azure account")]),e._v(" "),r("p",[e._v("An Azure subscription is needed to create resources and deploy the application for this workshop.")]),e._v(" "),r("p",[e._v("If you don't have an account, you can "),r("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=nitro-workshop-yolasors",target:"_blank",rel:"noopener noreferrer"}},[e._v("create one for free using this link"),r("OutboundLink")],1),e._v(". It includes free credits, more than enough to cover usage for this workshop 😉.")]),e._v(" "),r("h3",{attrs:{id:"i-have-an-azure-pass"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#i-have-an-azure-pass"}},[e._v("#")]),e._v(" I have an Azure Pass")]),e._v(" "),r("p",[e._v("If you are participating in an event and you have an "),r("strong",[e._v("Azure Pass")]),e._v(", follow these steps instead to create a new subscription.")]),e._v(" "),r("p",[e._v("Before starting, make sure that:")]),e._v(" "),r("ul",[r("li",[e._v("You have a Microsoft account (formerly Live). You can create one on "),r("a",{attrs:{href:"https://account.microsoft.com?WT.mc_id=nitro-workshop-yolasors",target:"_blank",rel:"noopener noreferrer"}},[e._v("account.microsoft.com"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[e._v("Your account was never used for another Azure subscription. Otherwise, you won't be able to use the Azure Pass.")])]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("Important")]),e._v(" "),r("p",[e._v("If at some point during the registration process you are asked to provide your credit card information, something is not right. Ask help to one of the instructors.")])]),e._v(" "),r("p",[e._v("Open "),r("a",{attrs:{href:"https://www.microsoftazurepass.com/Home/HowTo?Length=5&WT.mc_id=nitro-workshop-yolasors",target:"_blank",rel:"noopener noreferrer"}},[e._v("this link"),r("OutboundLink")],1),e._v(" and follow the instruction steps.")]),e._v(" "),r("h2",{attrs:{id:"test-your-environment"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#test-your-environment"}},[e._v("#")]),e._v(" Test your environment")]),e._v(" "),r("p",[e._v("Open up a terminal, then type these commands:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("node -v\nnpm -v\naz -v\n")])])]),r("p",[e._v("If you see all the tools version printed in the console, you're ready to go! 🎉")])])}),[],!1,null,null,null);t.default=s.exports}}]);