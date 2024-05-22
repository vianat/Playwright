Feature: Assertions

Scenario: Check element visibility
    Given go to "https://www.letskodeit.com/practice"
    And check element visibility

Scenario: Check element present
    Then go to "https://the-internet.herokuapp.com/add_remove_elements/"
    And check element present

Scenario: Check enable element
    Then go to "https://letcode.in/buttons"
    And check enable element

Scenario: Check text match
    Then go to "https://letcode.in/buttons"
    And check text match

Scenario: Check element attributes
    Then go to "https://letcode.in/buttons"
    And check element attributes

Scenario: Check url & title
    Then go to "https://letcode.in/buttons"
    And check url & title

Scenario: Screenshot
    Then go to "https://letcode.in/buttons"
    And screenshot