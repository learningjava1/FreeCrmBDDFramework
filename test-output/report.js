$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Akil/eclipse-workspace-naveen/FreeCrmBDDFramework/src/main/java/Features/dealsmap.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Create a new deal scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-create-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "adminbaba",
        "ozonepark1"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user moves to the new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probability",
        "commission"
      ],
      "line": 15
    },
    {
      "cells": [
        "test deal1",
        "1000",
        "50",
        "10"
      ],
      "line": 16
    },
    {
      "cells": [
        "test deal2",
        "2000",
        "60",
        "20"
      ],
      "line": 17
    },
    {
      "cells": [
        "test deal3",
        "3000",
        "70",
        "30"
      ],
      "line": 18
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepWithMapStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 9680262100,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 8881800,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapStepDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 550737500,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2974879500,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 11995300,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapStepDefinition.user_moves_to_the_new_deal_page()"
});
formatter.result({
  "duration": 375853500,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapStepDefinition.user_enters_deal_details(DataTable)"
});
formatter.result({
  "duration": 26201062600,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 694989700,
  "status": "passed"
});
});