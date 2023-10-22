Feature: Show/Hide Event Details

 Scenario: Initially, the event details are hidden.
    Given the user is viewing the list of events
    When no action is taken on an event
    Then the event details should be hidden by default

 Scenario: User can expand an event to view its details.
    Given the user is viewing the list of events
    When the user clicks on the button of an event
    Then the detailed information about the event should be displayed

 Scenario: User can collapse an event to hide its details.
    Given the user has expanded an event to view its details
    When the user clicks on the button of the event
    Then the event details should be hidden again