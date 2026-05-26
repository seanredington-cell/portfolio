---
id: "regulatory-reporting"
name: "Regulatory Reporting"
description: "Patented product that uses LLMs to empower users impacted by a cyber security incident to stay compliant with government regulations through collaboration and reporting."
tldr: "Patented product that uses LLMs to empower users impacted by a cyber security incident to stay compliant with government regulations through collaboration and reporting."
logo: "/icon-cygnvs-2.png"
logoPlaceholder: "📊"
logoColor: "#3B82F6"
accentColor: "59, 130, 246"
protected: true
password: "letmein"
image: "/projects/regulatory-reporting/iso_1_rectangle.png"
layeredImages:
  background: "/projects/regulatory-reporting/reporting-hero-bg.png"
  floatingIcons:
    - src: "/projects/regulatory-reporting/reporting-icon-2.svg"
      position: "top-left"
    - src: "/projects/regulatory-reporting/reporting-icon-1.svg"
      position: "top-right"
    - src: "/projects/regulatory-reporting/reporting-icon-3.svg"
      position: "middle-left"
    - src: "/projects/regulatory-reporting/reporting-icon-5.svg"
      position: "middle-right"
    - src: "/projects/regulatory-reporting/reporting-icon-4.svg"
      position: "bottom-center"
tags:
  sector: "Cybersecurity"
  role: "Lead UX Designer"
  timeline: "6 months"
quickRead:
  role: "Lead UX Designer across 6 phased releases, working with lawyers, engineers, and C-suite stakeholders."
  problem: "New SEC regulations required companies to file cyber incident reports under tight deadlines. No existing tool supported secure, collaborative, multi-party report filing — lawyers were coordinating via email and phone calls."
  approach: "Took a phased approach — each month shipped a meaningful increment. Started by repurposing existing platform modules, then progressively added a report library, PDF export, an AI co-pilot for surfacing relevant incident data, field-level comments, and smart report suggestions using a universal sentence encoder."
  outcome: "Patent-pending product. Sales pitch shifted to lead with this feature. The team grew from a skeleton crew to a full dedicated squad of developers, a PM, and a designer based on customer interest."
  skills: "Complex UX design · Phased product delivery · Stakeholder management · AI-assisted features · Legal domain research · Systems thinking"
---

## Background

New laws introduced by the U.S. Securities and Exchange Commission (SEC) require companies to report if a cyber incident has occurred.

CYGNVS is a collaborative out-of-band incident response platform. In the event of an incident, users can complete a range of different tasks within the platform.

Due to the functionality of CYGNVS, it was decided that we would explore if the platform could be used to help people comply with these new laws.

![Notes on V1 of Reporting](/projects/regulatory-reporting/rep-image-1.png)

---

## Problem

The new laws require companies to report on various factors to both federal and state governments within a short timeframe in the event of an incident. Failure to comply with these can lead to severe consequences including large fines and jail time.

> **Users need to be able to collaborate on filing a report using CYGNVS.** As the IT security lead in a company that has had customer information leaked, I need to be able to collaborate with my company's law-firm in a secure space so that I can work with them in completing the necessary reports.

> **CISOs need to be compliant so that they are not held responsible in court.** As the Chief Information Security Officer (CISO) of a publicly trading company that has experienced an incident, I need to ensure that I am fully compliant with the law so that if my company is brought to court I am not liable for any wrongdoing.

---

## Goal

- Use the existing functionality of the platform as the foundation for this feature. Within CYGNVS, we already had a number of modules that could be repurposed for Reporting.
- Build the feature on a scalable foundation that could be re-used and iterated on across the platform.
- Create a 'Kick-ass demo' that could be used by sales to generate leads and revenue for the company.

---

## Process

### Understanding the current problems

We met with our key users; lawyers, and discussed their current ways of working. The main takeaways from those discussions were:

- There are many collaborators on a report. This makes it difficult to maintain one source of truth especially when contacting each other primarily via email and phone calls.
- In each incident, depending on where the company does business and where the impacted users are, similar reports must be filed to different agencies
- Filing reports involves lots of back and forth both pre and post submission as information can become outdated quickly
- Tracking the changes in a report over time was crucial. They had to be able to identify who made a change and why.

We **released this product in phases**, each of which could be grouped under a general "How might we (HMW)…" statement. Each **phase lasted roughly a month** from start of design to release of development.

### Phase 1 - How might we use what we have to solve the user's problems

We needed to explore if solving the user problems was something that we could even do well within CYGNVS.

CYGNVS is structured using spaces called Rooms, each of which are used for one incident. These Rooms contain users from any number of different companies. Inside a Room there are smaller spaces, with subsets of users in each of them called Workstreams.

A Workstream contains a number of different modules that allow users to communicate with each other, track workflow and capture important information about the incident among other things.

![CYGNVS platform structure](/projects/regulatory-reporting/rep-image-2.png)

I identified that by changing how we displayed one of our modules from a table to a form, we could make it quite simple for users to capture information about the report in a workstream.

This meant that the Workstream would be the foundation on which we built this feature.

![Table to form transformation](/projects/regulatory-reporting/rep-image-3.png)

Once designs were shared with stakeholders including our CEO, CTO and VP of engineering, we had the green light to explore what the future of reporting might look like.

### Phase 2 - HMW enable users to fill out entire reports in CYGNVS

It was clear we were missing two major components of the reporting journey - selecting a report and submitting the report.

A library of all reports was created which allowed users to search and filter. Upon selecting a report users were provided with additional information on the report before creating it.

![Report library](/projects/regulatory-reporting/rep-image-4.png)

Submitting a report was tricky as most needed to be submitted by law-firms directly to an agency. We made the strategic decision to not actually allow for the submission of the reports using our platform as it was incredibly complex. Instead, we enabled users to lock a version of that report which would then be saved as a correctly formatted .PDF which was ready for submission.

From speaking with the law firms, we recognised that reports may need multiple revisions, so users were able to unlock the report to continue working on them, while still having a version history of the report saved in the platform for future reference.

![Report submission flow](/projects/regulatory-reporting/rep-image-5.png)

Once completed, we looked at how we could improve the experience of filling out the report itself.

### Phase 3 - HMW leverage the rest of the data in a room

Within a Room, lots of information was being captured in different workstreams. We wanted to be able to surface relevant information within a report to assist users.

After discussions with internal experts around how this information should be surfaced, it became clear that it would live on a side panel within the reporting page. I iterated on a number of different ways which this could be done.

![Side panel iterations](/projects/regulatory-reporting/rep-image-6.png)

Once a user selected a field within a report, the panel would show cards with related information in the room they were in, allowing them to leverage this information to ensure that the report was filled out correctly. Users could also search from this side panel for all of the information in the room.

To develop trust in this feature, it was given a name; *CYGNVS Co-Pilot* (later changed numerous times) with a plan to use it to help users complete reports accurately.

![Report with side panel](/projects/regulatory-reporting/rep-image-7.png)

Being able to add this information to reports was very well received, however, it did bring with itself a new set of challenges.

### Phase 4 - HMW ensure that the information in a report is up to date

Linking information from outside of the report, to fields within the report created quite a few complex scenarios that needed to be accounted for. To map all of these out, I created a task flow that included all of the possible actions that could take place when a user selected a field.

![Task flow for reporting](/projects/regulatory-reporting/rep-image-8.png)

Using this task flow as a reference I then worked through each of the flows and created high fidelity UI.

![Linking information flow](/projects/regulatory-reporting/rep-image-9.png)

As one of the key problems we were trying to solve for was related to compliance in the event of a court summoning, we needed to ensure that all of the data and changes within a report were recorded. To solve for this, we added a field level activity log that tracked all of the updates to that field.

![Activity log](/projects/regulatory-reporting/rep-image-10.png)

### Phase 5 - HMW enable more efficient collaboration within a report

Lots of different people were collaborating on filling out reports so ensuring that they could communicate effectively was paramount.

Reports had a comment section which was at the bottom of the page. Moving this comment section to a field level allows users to contextually comment while being able to see the updates that had taken place on that field.

![Field-level updates and comments](/projects/regulatory-reporting/rep-image-11.png)

### Phase 6 - HMW guide users to complete reports correctly

I wanted to further explore the idea of the CYGNVS Co-Pilot and where it could be used throughout the reporting process. It wasn't AI, but I wanted to show that it was smart.

By adding suggested reports based on the information that was in other workstreams, it would show its usefulness. This would help users that knew they needed to fill out reports, but were unsure of which reports needed to be completed.

![Report suggestions](/projects/regulatory-reporting/rep-image-12.png)

The load time and accuracy of the recommendations were also improved. By using a universal sentence encoder, the accuracy and speed of the results were greatly increased, leading to a much snappier report filling experience for the user.

In the future, it was also planned to use this to assist users in completing complicated fields by collating different data sources.

---

## Impact

- The unique way which this feature allows users to collaborate on filling out reports is patent pending
- Subsequent to the release of the phases, our sales pitch completely shifted to have this feature at the forefront (as of now, I don't have access to sales numbers)
- Modules that were built are being re-used across the platform to improve the overall UX of the platform
- Having started as a skeleton team working on this, an entire development team, PM and designer are now working to iterate on it based on interest from users and customers

---

## Learnings

This was an interesting project due to some of the conflicting goals that different stakeholders had.

The sales team just wanted us to build out a flashy demo, however, on the product team we pushed hard to ensure that we created something that was useful and scaleable so that when the feature sold, it was useable and delighted its users.

The phased approach allowed us to constantly build on what we had while also having a natural stopping point if other priorities came up, something which regularly occurred within the start up.
