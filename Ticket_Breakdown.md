# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
### Ticket 1: Create a custom id field in the Agent table

Acceptance criteria:
- A custom id field is added to the Agent table.
- The custom id field is editable by Facilities.
- Custom ids are unique per Facility.
- Custom ids are displayed in reports instead of the internal database ids.

Implementation details:
- Add a new column to the Agent table for custom ids.
- Update the user interface to allow Facilities to edit the custom id field.
- Add validation to ensure that custom ids are unique per Facility.

### Ticket 2: Modify the getShiftsByFacility function to include custom ids

Acceptance criteria:
- The getShiftsByFacility function now returns the custom id for each Agent assigned to a Shift in addition to the internal database id.

Implementation details:
- Modify the query used in the getShiftsByFacility function to include the custom id field from the Agent table.
- Update the function to return the custom id instead of the internal database id when generating reports.

### Ticket 3: Modify the generateReport function to include custom ids

Acceptance criteria:
- The generateReport function now uses the custom id instead of the internal database id when generating reports.

Implementation details:
- Update the report generation code to use the custom id field from the Agent table instead of the internal database id.

### Ticket 4: Add validation to ensure that custom ids are unique per Facility

Acceptance criteria:
- When a Facility tries to save a custom id for an Agent, the system should check if the custom id is unique for that Facility.
- An error message should be displayed if the custom id is not unique.

Implementation details:
- Modify the user interface to check for duplicate custom ids before saving.
- Display an error message if the custom id is not unique.
