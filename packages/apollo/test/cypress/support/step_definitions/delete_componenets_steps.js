/*
 * Copyright contributors to the Hyperledger Fabric Operations Console project
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given(/^I delete all the Peers$/, () => {

	var canDelete=true;
	cy.get(".ibp-container-empty-title").then(($body) => {
		cy.log("The value of text is : - "+$body.text())
		cy.log($body.text()=="No Peers available")
		cy.log("Value of Can Delete is 1 "+canDelete);
		if($body.text()=="No Peers available")
		{
			cy.log("inside if condition of No Peers Available");
			cy.log("Looks Like no peers are available");
			canDelete=false;
			cy.log("Value of Can Delete is 2 "+canDelete);
		}
	});

	cy.log("Value of Can Delete is 3 "+canDelete);
	  if(canDelete)
	  {
		cy.log("1");
	  });
	}
	else
	{
		cy.log("Cannot Delete Peers as No Peers Available :)")
	}
});

Then(/^the channel with name (?:'|")(.*?)(?:'|") should have been created$/, (channelName) => {
	cy.get('.ibp-container-tile-pending').contains(channelName).should('be.visible')
});
