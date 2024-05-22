Feature: Data from CSV

Scenario: Data from CSV

    Then go to "https://www.saucedemo.com/"
    Given valid csv

    Then go to "https://www.saucedemo.com/"
    Then invalid csv