@deleteComponents
Feature: Delete All the Componenets and Wallets

  Background: Login to console
    Given I go to the console
    And I am logged in
    And I am ready to get started

  Scenario: Delete Peers
    When I delete all the Peers
