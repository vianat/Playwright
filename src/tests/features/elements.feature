Feature: Assertions

Scenario: Text box
    Given go to "https://www.letskodeit.com/practice"
    And text box

Scenario: left click
    Then go to "https://play1.automationcamp.ir/mouse_events.html"
    And left click

Scenario: double click
    Then go to "https://play1.automationcamp.ir/mouse_events.html"
    And double click

Scenario: right click
    Then go to "https://play1.automationcamp.ir/mouse_events.html"
    And right click

Scenario: radio button
    Then go to "https://www.letskodeit.com/practice"
    And radio button

Scenario: check box
    Then go to "https://www.letskodeit.com/practice"
    And check box

Scenario: single dropdown
    Then go to "https://www.letskodeit.com/practice"
    And single dropdown

Scenario: alert
    Then go to "https://www.letskodeit.com/practice"
    And alert

Scenario: table
    Then go to "https://testautomationpractice.blogspot.com"
    And table

Scenario: pagination table
    Then go to "https://testautomationpractice.blogspot.com"
    And pagination table

Scenario: iframe
    Then go to "https://www.letskodeit.com/practice"
    And iframe

Scenario: Single tab window
    Then go to "https://www.letskodeit.com/practice"
    And single tab window

Scenario: Single window
    Then go to "https://demo.automationtesting.in/Windows.html"
    And single window

Scenario: Multiple tabs
    Then go to "https://demo.automationtesting.in/Windows.html"
    And multiple tabs

Scenario: Calendar use npm luxon lib
    Then go to "https://www.calculator.net/age-calculator.html"
    And calendar use npm luxon lib

Scenario: Drag and drop 1
    Then go to "https://testautomationpractice.blogspot.com"
    And drag and drop

Scenario: Drag and drop 2
    Then go to "https://testautomationpractice.blogspot.com"
    And drag and drop 2

Scenario: Download 1
    Then go to "https://demo.automationtesting.in/FileDownload.html"
    And file download 1

Scenario: Download 2
    # Then go to "https://demo.automationtesting.in/FileDownload.html"
    # And file download 2

Scenario: Upload 1
    Then go to "https://blueimp.github.io/jQuery-File-Upload/"
    And Upload multiple Files - Approach 1

Scenario: Upload 2
    Then go to "https://blueimp.github.io/jQuery-File-Upload/"
    And Upload multiple Files - Approach 2