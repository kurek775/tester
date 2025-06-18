import type { Test } from "../models/Test.model";

const PlanAndAutomateIdentityGovernance: Test = {
  code: "PlanAndAutomateIdentityGovernance",
  title: "Plan and automate identity governance",
  questions: [
    {
      code: "Q1",
      content:
        "Your company has an Microsoft Entra tenant with a Premium P2 license. You create a Log Analytics workspace to collect sign-ins log details.<br><br>You need to perform an analysis of the Microsoft Entra sign-ins log. The results of your analysis should be presented in an interactive visual report within the Azure portal.<br><br><strong>Solution:</strong> Use eDiscovery.<br><br><strong>Does this solution meet the goal?</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "This solution does not meet the goal. You can use eDiscovery to identify, hold, and export electronic information that can be used as evidence in legal cases. You can use eDiscovery in Microsoft 365 to search for content in Exchange Online mailboxes, SharePoint Online sites, Microsoft Teams, Microsoft 365 Groups, and Viva Engage teams.",
      category: "Microsoft Entra / Monitoring & Reporting",
    },
    {
      code: "Q2",
      content:
        "Your company has an Microsoft Entra tenant with a Premium P2 license. You create a Log Analytics workspace to collect sign-ins log details.<br><br>You need to perform an analysis of the Microsoft Entra sign-ins log. The results of your analysis should be presented in an interactive visual report within the Azure portal.<br><br><strong>Solution:</strong> Use an Azure Monitor workbook.<br><br><strong>Does this solution meet the goal?</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "No", correct: false },
        { code: "B", content: "Yes", correct: true },
      ],
      explanation:
        "This solution meets the goal. Azure Monitor workbooks can be used to query data from multiple sources such as logs, metrics, alerts, and Azure Resource Graph. The results can then be displayed in an interactive report to provide a rich visual experience.",
      category: "Microsoft Entra / Monitoring & Reporting",
    },
    {
      code: "Q3",
      content:
        "Your company has an Microsoft Entra tenant with a Premium P2 license. You create a Log Analytics workspace to collect sign-ins log details.<br><br>You need to perform an analysis of the Microsoft Entra sign-ins log. The results of your analysis should be presented in an interactive visual report within the Azure portal.<br><br><strong>Solution:</strong> Use Microsoft Entra Connect.<br><br><strong>Does this solution meet the goal?</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "No", correct: true },
        { code: "B", content: "Yes", correct: false },
      ],
      explanation:
        "This solution does not meet the goal. Microsoft Entra ID Connect helps to monitor your on-premises identity infrastructure. With the Microsoft Entra ID Connect portal you can check alerts, monitor the performance of your key on-premises identity components, and analyze their usage. It is not intended to perform Microsoft Entra sign-ins log analyses.",
      category: "Microsoft Entra / Monitoring & Reporting",
    },
    {
      code: "Q4",
      content:
        "You work as an Identity and Access Administrator.<br><br>You configure Identity Governance in Microsoft Entra ID to enable entitlement management.<br><br>You need to determine what the requirements are for the use of resource catalogs in Microsoft Entra ID entitlement management.<br><br>For each of the following statements, select Yes if the statement is true. Otherwise, select No.<br><br><strong>Statement:</strong> By default, an Identity Governance administrator can manage all catalogs.<br><br><strong>Is this statement true?</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: true },
        { code: "B", content: "No", correct: false },
      ],
      explanation:
        "By default, an Identity Governance administrator can manage all catalogs. A Global administrator can manage all catalogs as well.",
      category: "Microsoft Entra / Identity Governance",
    },
    {
      code: "Q5",
      content:
        "You work as an Identity and Access Administrator.<br><br>You configure Identity Governance in Microsoft Entra ID to enable entitlement management.<br><br>You need to determine what the requirements are for the use of resource catalogs in Microsoft Entra ID entitlement management.<br><br>For each of the following statements, select Yes if the statement is true. Otherwise, select No.<br><br><strong>Statement:</strong> You can create a new catalog of resources programmatically.<br><br><strong>Is this statement true?</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: true },
        { code: "B", content: "No", correct: false },
      ],
      explanation:
        "You can create a new catalog of resources programmatically using Microsoft Graph. The calling app needs delegated permission EntitlementManagement.ReadWrite.All and the signed-in user must be a Global admin, Identity Governance admin, User admin or Catalog creator.",
      category: "Microsoft Entra / Identity Governance",
    },
    {
      code: "Q6",
      content:
        "You work as an Identity and Access Administrator.<br><br>You configure Identity Governance in Microsoft Entra ID to enable entitlement management.<br><br>You need to determine what the requirements are for the use of resource catalogs in Microsoft Entra ID entitlement management.<br><br>For each of the following statements, select Yes if the statement is true. Otherwise, select No.<br><br><strong>Statement:</strong> You require an Microsoft Entra ID P1 license to use entitlement management.<br><br><strong>Is this statement true?</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "You do not require a Microsoft Entra ID P1 license to use entitlement management. You need a P2 license, as entitlement management is included in Microsoft Entra ID P2.",
      category: "Microsoft Entra / Identity Governance",
    },
    {
      code: "Q7",
      content:
        "You work as an administrator for Company1.<br><br>All of the users in your organization have been assigned a Microsoft 365 E5 license. You use access packages for specific scenarios in your organization.<br><br>As an administrator, you create an initial catalog and delegate some administrative tasks to eight other users. One of the policies specifies that all users from the Group1 security group (750 users) can request a specific set of access packages. 20 employees request the access packages.<br><br>You need to determine the number of additional Microsoft Entra ID P2 licenses that are needed within your organization to use these access packages.<br><br><strong>How many additional licenses do you need?</strong><br><br><strong>Choose the correct answer</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "750", correct: false },
        { code: "B", content: "0", correct: true },
        { code: "C", content: "8", correct: false },
        { code: "D", content: "20", correct: false },
      ],
      explanation:
        "You need 0 additional licenses. When using access packages, a Microsoft Entra ID P2 license is required for all users who can request access packages. In this scenario, you would therefore require 750 licenses. However, as all users in your organization have a Microsoft 365 E5 license, which includes Microsoft Entra ID P2, no additional licenses are required.",
      category: "Microsoft Entra / Identity Governance",
    },
    {
      code: "Q8",
      content:
        "Your company is using the Microsoft Entra ID P2 license.<br><br>You need to ensure that anyone that accesses a specific line-of-business (LOB) cloud app is provided with a PDF file containing the IT policy. The solution must minimize the administrative effort.<br><br><strong>What should you configure?</strong><br><br><strong>Choose the correct answer</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "A PowerShell script", correct: false },
        {
          code: "B",
          content: "Terms and conditions in Microsoft Intune",
          correct: false,
        },
        {
          code: "C",
          content: "App protection policy in Microsoft Intune",
          correct: false,
        },
        {
          code: "D",
          content: "Terms of Use under Identity Governance",
          correct: true,
        },
      ],
      explanation:
        "You should configure Terms of Use under Identity Governance. This allows you to define a Terms of use document that contains the IT policy. This document can be tied to a conditional access policy that targets a specific cloud app.<br><br>You should not configure Terms and conditions in Microsoft Intune. This does not offer the same level of customizability as the Microsoft Entra Terms of use feature. This change would also affect all users in the organization.<br><br>You should not configure an App protection policy in Microsoft Intune. This feature is for assigning a set of security policies on apps that have implemented the Intune SDK, and cannot be used to show the IT policy to the end-user during sign-in.<br><br>You should not configure a PowerShell script. You can develop a PowerShell script to configure the Terms of Use through the Microsoft Graph API, but that would have an administrative overhead.",
      category: "Microsoft Entra / Identity Governance",
    },
    {
      code: "Q9",
      content:
        "You are the administrator for your company.<br><br>Your company is implementing Identity Governance features in Microsoft Entra ID.<br><br>You need to manage an access package for the sales team.<br><br><strong>Which two memberships can be managed with an access package?</strong> Each correct answer presents a complete solution.<br><br><strong>Choose the correct answers</strong>",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Membership of private channels in Teams",
          correct: false,
        },
        {
          code: "B",
          content: "Membership of Microsoft 365 Groups and Teams",
          correct: true,
        },
        {
          code: "C",
          content: "Membership of Dynamic security groups",
          correct: false,
        },
        {
          code: "D",
          content: "Membership of SharePoint Online sites",
          correct: true,
        },
      ],
      explanation:
        "Both membership of Microsoft 365 Groups and Teams and membership of SharePoint Online sites can be managed with an access package. Membership of Microsoft Entra security groups and assignment to Microsoft Entra enterprise applications can also be managed with an access package.<br><br>Membership of private channels in Teams cannot be managed with an access package. Only the membership of the Microsoft 365 Groups and Teams can be managed with an access package.<br><br>Membership of Dynamic security groups cannot be managed with an access package. You can add a dynamic security group to an access package, but you can only add the Owner role, not the Member role.",
      category: "Microsoft Entra / Identity Governance",
    },
    {
      code: "Q10",
      content:
        "You are the Microsoft 365 administrator for CompanyA. You configure the lifecycle settings for external users in identity governance entitlement management, as shown in the exhibit:<br><br>You need to document the behavior of external users in Microsoft Entra ID.<br><br>For each of the following statements, select Yes if the statement is true. Otherwise, select No.<br><br><strong>Statement:</strong> Guest users that were invited through entitlement management will be blocked and removed as soon as they lose their last assignment to any access packages.<br><br><strong>Is this statement true?</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: true },
        { code: "B", content: "No", correct: false },
      ],
      explanation:
        "Guest users that were invited through entitlement management will be blocked and removed as soon as they lose their last assignment to any access packages. The settings shown in the exhibit apply to this scenario.",
      category: "Microsoft Entra / Identity Governance",
    },
    {
      code: "Q11",
      content:
        "You are the Microsoft 365 administrator for CompanyA. You configure the lifecycle settings for external users in identity governance entitlement management, as shown in the exhibit:<br><br>You need to document the behavior of external users in Microsoft Entra ID.<br><br>For each of the following statements, select Yes if the statement is true. Otherwise, select No.<br><br><strong>Statement:</strong> Guest users that were invited through entitlement management who lose their last assignment to any access package but who are also assigned to SharePoint Online sites will remain active.<br><br><strong>Is this statement true?</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "Guest users that were invited through entitlement management and assigned to SharePoint Online sites will not remain active. They will still be blocked and removed from the directory.",
      category: "Microsoft Entra / Identity Governance",
    },
    {
      code: "Q12",
      content:
        "You are the Microsoft 365 administrator for CompanyA. You configure the lifecycle settings for external users in identity governance entitlement management, as shown in the exhibit:<br><br>You need to document the behavior of external users in Microsoft Entra ID.<br><br>For each of the following statements, select Yes if the statement is true. Otherwise, select No.<br><br><strong>Statement:</strong> Guest users that were invited through Teams prior to the access package assignment will be blocked and removed as soon as they lose their last assignment to any access packages.<br><br><strong>Is this statement true?</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "Guest users that were invited through Teams and not via entitlement management will not be blocked or removed automatically. Only users invited through entitlement management are affected by the lifecycle settings.",
      category: "Microsoft Entra / Identity Governance",
    },
    {
      code: "Q13",
      content:
        "You are a Microsoft 365 administrator at CompanyA.<br><br>CompanyA uses access reviews to manage the lifecycle of guest users in Microsoft 365 resources.<br><br>The access review is created by another administrator as shown in the exhibit. The group owners request a change in the policy so that any user who is denied access will be automatically removed from the resource after the review is completed.<br><br>You need to adjust the policy to meet these requirements.<br><br><strong>What should you do?</strong><br><br><strong>Choose the correct answer</strong>",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content:
            "Change the If reviewers don't respond setting to Take recommendations.",
          correct: false,
        },
        {
          code: "B",
          content:
            "Change the If reviewers don't respond setting to Remove access.",
          correct: false,
        },
        {
          code: "C",
          content:
            "Change the Auto apply results to resource setting to Enable.",
          correct: true,
        },
        {
          code: "D",
          content:
            "Configure the At end of review, send notification to setting and select at least one user or group.",
          correct: false,
        },
      ],
      explanation:
        "You should change the Auto apply results to resource setting to Enable. Once this setting has been enabled, the results of each access review will automatically be applied to the resources that have been reviewed. In this scenario, guest users who are denied access will automatically be removed from the resource.<br><br>The other settings apply only when reviewers do not respond and do not impact the automatic removal of denied users.",
      category: "Microsoft Entra / Identity Governance",
    },
    {
      code: "Q14",
      content:
        "Your company plans to use Microsoft Entra ID entitlement management to manage access and collaboration with users from external partners through the use of access policies.<br><br>You need to determine if entitlement management can be configured to meet your collaboration requirements.<br><br>For each of the following statements, select Yes if the statement is true. Otherwise, select No.<br><br><strong>Statement:</strong> You can configure entitlement management to enable users to self-request an access package.<br><br><strong>Is this statement true?</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: true },
        { code: "B", content: "No", correct: false },
      ],
      explanation:
        "You can configure entitlement management to enable users to self-request an access package. The policy can support automatic or explicit approval.",
      category: "Microsoft Entra / Identity Governance",
    },
    {
      code: "Q15",
      content:
        "Your company plans to use Microsoft Entra ID entitlement management to manage access and collaboration with users from external partners through the use of access policies.<br><br>You need to determine if entitlement management can be configured to meet your collaboration requirements.<br><br>For each of the following statements, select Yes if the statement is true. Otherwise, select No.<br><br><strong>Statement:</strong> You must create a connected organization for each external domain for which you want to support collaboration.<br><br><strong>Is this statement true?</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: true },
        { code: "B", content: "No", correct: false },
      ],
      explanation:
        "You must create a connected organization for each external domain to support collaboration. This is required for Microsoft Entra B2B access through entitlement management.",
      category: "Microsoft Entra / Identity Governance",
    },
    {
      code: "Q16",
      content:
        "Your company plans to use Microsoft Entra ID entitlement management to manage access and collaboration with users from external partners through the use of access policies.<br><br>You need to determine if entitlement management can be configured to meet your collaboration requirements.<br><br>For each of the following statements, select Yes if the statement is true. Otherwise, select No.<br><br><strong>Statement:</strong> When you create a new catalog, you are required to explicitly enable it.<br><br><strong>Is this statement true?</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "When you create a new catalog, it is not required to explicitly enable it. By default, access packages are enabled. For external users, the 'Enabled for external users' setting must be configured but can be changed at any time.",
      category: "Microsoft Entra / Identity Governance",
    },
    {
      code: "Q17",
      content:
        "You administer an Microsoft Entra with the tenant name Company1.com and the Identity Governance settings shown in the exhibit titled Identity Governance Settings. You have been asked to create an access package to resources within your Azure cloud.<br><br>On January 29, 2023 you create AccessPackage1, as shown in the exhibits titled Access Package Config and Access Package Lifecycle.<br><br>On February 1, 2023 you assign AccessPackage1 to Contractor1@gmail.com.<br><br>For each of the following statements, select Yes if the statement is true. Otherwise, select No.<br><br><strong>Statement:</strong> Contractor1@gmail.com will be automatically removed from Company1.com on April 1, 2023.<br><br><strong>Is this statement true?</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: true },
        { code: "B", content: "No", correct: false },
      ],
      explanation:
        "Contractor1@gmail.com will be automatically removed from Company1.com on April 1, 2023. Since they were assigned via AccessPackage1 which expired on March 1, and based on the expiration policy, they are removed 30 days after expiration.",
      category: "Microsoft Entra / Identity Governance",
    },
    {
      code: "Q18",
      content:
        "You administer an Microsoft Entra with the tenant name Company1.com and the Identity Governance settings shown in the exhibit titled Identity Governance Settings. You have been asked to create an access package to resources within your Azure cloud.<br><br>On January 29, 2023 you create AccessPackage1, as shown in the exhibits titled Access Package Config and Access Package Lifecycle.<br><br>On February 4, 2023 you assign AccessPackage1 to Contractor2@gmail.com.<br><br><strong>Statement:</strong> Contractor2@gmail.com will be automatically removed from Company1.com on April 1, 2023.<br><br><strong>Is this statement true?</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: true },
        { code: "B", content: "No", correct: false },
      ],
      explanation:
        "Contractor2@gmail.com, like Contractor1, was assigned through AccessPackage1 and is subject to the same expiration and automatic removal rules. They will also be removed on April 1, 2023.",
      category: "Microsoft Entra / Identity Governance",
    },
    {
      code: "Q19",
      content:
        "You administer an Microsoft Entra with the tenant name Company1.com and the Identity Governance settings shown in the exhibit titled Identity Governance Settings. You have been asked to create an access package to resources within your Azure cloud.<br><br>On March 2, 2023, a guest user named Contractor3@gmail.com accepts your invitation to collaborate with your organization.<br>On March 3, 2023 you add Contractor3@gmail.com to Service Desk Group.<br><br><strong>Statement:</strong> Contractor3@gmail.com will be automatically removed from Company1.com on April 1, 2023.<br><br><strong>Is this statement true?</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "Contractor3@gmail.com was added manually to the Service Desk Group and not via AccessPackage1. Therefore, the expiration policy does not apply and they will not be automatically removed.",
      category: "Microsoft Entra / Identity Governance",
    },
    {
      code: "Q20",
      content:
        "You are responsible for managing Microsoft Entra ID in your organization.<br><br>You are asked to recreate Microsoft Entra ID terms of use policies, which users have to accept before accessing the organizations' sensitive resources. You configure the new policy as shown in the exhibit. Date format is DD.MM.YYYY.<br><br>• User1 accepts the terms of use policy on Dec 3, 2022<br>• User2 accepts the terms of use policy on Mar 3, 2023<br>• User3 accepts the terms of use policy on Jan 15, 2023<br><br>You need to determine when each user will need to reaccept the policy.<br><br>For each of the following statements, select Yes if the statement is true. Otherwise, select No.<br><br><strong>Statement:</strong> The first expiration date for User1 is Jan 1, 2023.<br><br><strong>Is this statement true?</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "The first expiration date for User1 is not Jan 1, 2023. The policy is configured with 'Expire starting on' set to March 1 and monthly frequency. So User1 must reaccept the terms no earlier than March 1, 2023.",
      category: "Microsoft Entra / Terms of Use",
    },
    {
      code: "Q21",
      content:
        "You are responsible for managing Microsoft Entra ID in your organization.<br><br>You are asked to recreate Microsoft Entra ID terms of use policies, which users have to accept before accessing the organizations' sensitive resources. You configure the new policy as shown in the exhibit. Date format is DD.MM.YYYY.<br><br>• User1 accepts the terms of use policy on Dec 3, 2022<br>• User2 accepts the terms of use policy on Mar 3, 2023<br>• User3 accepts the terms of use policy on Jan 15, 2023<br><br>You need to determine when each user will need to reaccept the policy.<br><br>For each of the following statements, select Yes if the statement is true. Otherwise, select No.<br><br><strong>Statement:</strong> The first expiration date for User2 is Apr 1, 2023.<br><br><strong>Is this statement true?</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: true },
        { code: "B", content: "No", correct: false },
      ],
      explanation:
        "User2 accepted on March 3, 2023. Since the 'Expire starting on' is March 1 and the frequency is monthly, their first reacceptance will be on April 1, 2023.",
      category: "Microsoft Entra / Terms of Use",
    },
    {
      code: "Q22",
      content:
        "You are responsible for managing Microsoft Entra ID in your organization.<br><br>You are asked to recreate Microsoft Entra ID terms of use policies, which users have to accept before accessing the organizations' sensitive resources. You configure the new policy as shown in the exhibit. Date format is DD.MM.YYYY.<br><br>• User1 accepts the terms of use policy on Dec 3, 2022<br>• User2 accepts the terms of use policy on Mar 3, 2023<br>• User3 accepts the terms of use policy on Jan 15, 2023<br><br>You need to determine when each user will need to reaccept the policy.<br><br>For each of the following statements, select Yes if the statement is true. Otherwise, select No.<br><br><strong>Statement:</strong> The first expiration date for User3 is Feb 15, 2023.<br><br><strong>Is this statement true?</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "The first expiration date for User3 is not Feb 15. Since the expiration is configured to start on March 1 and the frequency is monthly, the first reacceptance is on March 1, 2023.",
      category: "Microsoft Entra / Terms of Use",
    },
    {
      code: "Q23",
      content:
        "You are the global administrator of a company.<br><br>The company uses Microsoft Entra ID to collaborate with external partners and has assigned Microsoft 365 E5 licenses to all its administrative staff. The company has just undergone an external audit, and the auditor reported that there should be a control to govern guest users.<br><br>The CIO asks you to implement a technical control that can fulfill the auditor's requirements.<br><br><strong>What should you implement to automatically keep track of guest users?</strong><br><br><strong>Choose the correct answer</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Spreadsheets", correct: false },
        { code: "B", content: "Group-based access", correct: false },
        { code: "C", content: "Guest Inviter role", correct: false },
        { code: "D", content: "Access reviews", correct: true },
      ],
      explanation:
        "You should implement access reviews. Configuring access reviews in the External Identities section of Microsoft Entra ID allows you to have the guests continuously evaluate their own need for access. This allows you to remove guest accounts that are no longer active in a partnering company from the groups to which they have access.<br><br>\
You should not implement spreadsheets, as it is an error-prone manual process and not a technical control.<br><br>\
You should not implement a Guest Inviter role. This role allows the user to invite further guest accounts, it is not a way of keeping access up to date in an automated fashion.<br><br>\
You should not implement Group-based access, as this would still require you to maintain a list of guests manually. It also adds administrative overhead.",
      category: "Microsoft Entra / Identity Governance",
    },

    {
      code: "Q24",
      content:
        "You manage your corporate user accounts in a Microsoft Entra tenant.<br><br>User3 is set as a manager in User1 and User2’s Microsoft Entra ID user profiles. For User3 and User4, the manager field is not populated yet.<br><br>You create a new access review for an HR application with the review scope set to All users, as shown in the exhibit.<br><br><strong>Who should review the access for each of your users?</strong> To answer, select the appropriate options from the drop-down menus.<br><br><strong>Choose the correct options</strong><br><br>User3 should review the access for User1.<br>User3 should review the access for User2.<br>HRAdmin should review the access for User3.<br>HRAdmin should review the access for User4.",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content:
            "User3 should review the access for User1, User3 should review the access for User2, HRAdmin should review the access for User3, HRAdmin should review the access for User4",
          correct: true,
        },
        {
          code: "B",
          content:
            "User2 should review the access for User1, User3 should review the access for User1, HRAdmin should review the access for User3, HRAdmin should review the access for User4",
          correct: false,
        },
        {
          code: "C",
          content:
            "User2 should review the access for User3, User3 should review the access for User1, HRAdmin should review the access for User3, HRAdmin should review the access for User4",
          correct: false,
        },
        {
          code: "D",
          content:
            "User2 should review the access for User1, User3 should review the access for User2, HRAdmin should review the access for User3, HRAdmin should review the access for User1",
          correct: false,
        },
      ],
      explanation:
        "User3 should review the access for User1 and User2. As shown in the exhibit, access review has the managers of the users configured as the reviewers. Therefore, access review notifications should be sent to the manager listed in the user’s Microsoft Entra ID user profile.<br><br>\
HRAdmin should review the access for User3 and User4. There are no managers listed in the User3 and User4 user profiles, so Microsoft Entra ID Identity Governance will switch to a fallback scenario and notify HRAdmin, which is listed as the Fallback Reviewer Type in the given access review.<br><br>\
User1 and User2 should not review any access profiles. In the given access profile, the Reviewers option is set to Managers of users. That is why access for User1 and User2 should be reviewed by their manager. User1 and User2 would only be able to review their access if the Select Reviewers option was set to Users review their own access. They could also review the access if the Select Reviewers option was set to Selected user(s) or group(s) and when they are explicitly listed as selected reviewer.\
",
      category: "Microsoft Entra / Identity Governance",
    },
    {
      code: "Q25",
      content:
        'Your company has a Microsoft Entra ID tenant linked to an Azure subscription.<br><br>You create Microsoft Entra ID Identity Governance access reviews for three groups in Microsoft Entra ID as shown below:<br><br><table class="table table-bordered"><thead><tr><th>Access Review</th><th>Number of users</th><th>Reviewers</th></tr></thead><tbody><tr><td>Group1</td><td>20 member accounts</td><td>1 group owner</td></tr><tr><td>Group2</td><td>10 member accounts and 10 guest accounts</td><td>self review</td></tr><tr><td>Group3</td><td>20 member accounts</td><td>self review</td></tr></tbody></table><br><br>Please note the following:<ul><li>No user is a member of multiple groups.</li><li>The tenant is linked to an Azure subscription</li><li>MAU billing is enabled.</li></ul><br>You need to identify the number of Microsoft Entra ID P2 licenses required to cover the use of access reviews.<br><br><strong>How many Microsoft Entra ID P2 licenses should you purchase?</strong><br><br><strong>Choose the correct answer</strong>',
      isHtmlContent: true,
      options: [
        { code: "A", content: "60", correct: false },
        { code: "B", content: "11", correct: false },
        { code: "C", content: "31", correct: false },
        { code: "D", content: "51", correct: true },
      ],
      explanation:
        "You should purchase 51 Microsoft Entra ID P2 licenses to cover the use of access reviews in your company. P2 licenses are required for users who are reviewed, perform self-reviews, or are assigned as reviewers, including group owners. Guest users are covered under the monthly active users (MAU) billing model, so they do not require individual licenses when MAU billing is enabled.<br><br>In this scenario:<ul><li>Group1: 20 tenant users (reviewed) + 1 group owner (reviewer) = 21 P2 licenses</li><li>Group2: 10 tenant users (self-reviewers) = 10 P2 licenses</li><li>Group3: 20 tenant users (self-reviewers) = 20 P2 licenses</li><li>Guest users (10 in Group2): covered under MAU</li></ul>Total = 21 + 10 + 20 = 51 Microsoft Entra ID P2 licenses.<br><br>You should not purchase 11, 31, or 60 user licenses. Based on your access review configuration, the total number of required P2 licenses is 51.",
      category: "Microsoft Entra / Identity Governance",
    },
    {
      code: "Q26",
      content:
        "You work as an administrator for Company1. Your organization uses access reviews to reduce stale roles in the environment.<br><br>The security officer in your organization will need access rights to create access reviews to review privileged roles in Microsoft Entra ID.<br><br>You need to assign the security officer the correct rights to perform this task, while using the principle of least privilege.<br><br><strong>What Microsoft Entra ID role should you assign the security officer?</strong><br><br><strong>Choose the correct answer</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Security Reader", correct: false },
        { code: "B", content: "Security Administrator", correct: false },
        { code: "C", content: "Privileged Role Administrator", correct: true },
        { code: "D", content: "Global Administrator", correct: false },
      ],
      explanation:
        "You should assign the security officer the Privileged Role Administrator role. The roles required to create or edit access reviews depends on the resource being reviewed. For privileged roles in Microsoft Entra ID, the user creating the access review should have either the Global Administrator or the Privileged Role Administrator role. Since you need to use the principle of least privilege, the Privileged Role Administrator role should be used in this scenario.<br><br>You should not use the Global Administrator role. This role will grant the rights to create the required access review, but it will also grant rights to all other possible operations in Microsoft Entra ID, such as adding and removing accounts and applications, resetting passwords for all users including administrators, etc. Therefore, it does not adhere to the principle of least privilege.<br><br>You should not use the Security Administrator role. This role cannot be used to create access reviews for privileged roles in Microsoft Entra ID. It can however be used to read the access review results.<br><br>You should not use the Security Reader role. This role cannot be used to create access reviews for privileged roles in Microsoft Entra ID. It can however be used to read the access review results.",
      category: "Microsoft Entra / Identity Governance",
    },
    {
      code: "Q27",
      content:
        'Your organization uses access reviews to periodically review group membership for several groups. For Group1, these access reviews are done by Manager1 and Manager2.<br><br>A new access review cycle is started, and both managers are asked to review the group membership for the four users in Group1. Manager1 performs this review 12 hours before Manager2. The results of the group membership review are shown below:<br><br><table class="table table-bordered"><thead><tr><th>Group1 Member</th><th>Manager1</th><th>Manager2</th></tr></thead><tbody><tr><td>User1</td><td>Approve</td><td>Approve</td></tr><tr><td>User2</td><td>Deny</td><td>Deny</td></tr><tr><td>User3</td><td>Approve</td><td>Deny</td></tr><tr><td>User4</td><td>Deny</td><td>Approve</td></tr></tbody></table><br><br><strong>Statement:</strong> When the review period ends, User1 will still be a member of Group1.<br><br><strong>Is this statement true?</strong>',
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: true },
        { code: "B", content: "No", correct: false },
      ],
      explanation:
        "When the review period ends, User1 will still be a member of Group1. Both managers approved the membership for User1, so no changes will be made.",
      category: "Microsoft Entra / Identity Governance",
    },
    {
      code: "Q28",
      content:
        'Your organization uses access reviews to periodically review group membership for several groups. For Group1, these access reviews are done by Manager1 and Manager2.<br><br>A new access review cycle is started, and both managers are asked to review the group membership for the four users in Group1. Manager1 performs this review 12 hours before Manager2. The results of the group membership review are shown below:<br><br><table class="table table-bordered"><thead><tr><th>Group1 Member</th><th>Manager1</th><th>Manager2</th></tr></thead><tbody><tr><td>User1</td><td>Approve</td><td>Approve</td></tr><tr><td>User2</td><td>Deny</td><td>Deny</td></tr><tr><td>User3</td><td>Approve</td><td>Deny</td></tr><tr><td>User4</td><td>Deny</td><td>Approve</td></tr></tbody></table><br><br><strong>Statement:</strong> When the review period ends, User2 will still be a member of Group1.<br><br><strong>Is this statement true?</strong>',
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "When the review period ends, User2 will not be a member of Group1. Both managers denied the membership for User2, so User2 will be removed from Group1.",
      category: "Microsoft Entra / Identity Governance",
    },
    {
      code: "Q29",
      content:
        'Your organization uses access reviews to periodically review group membership for several groups. For Group1, these access reviews are done by Manager1 and Manager2.<br><br>A new access review cycle is started, and both managers are asked to review the group membership for the four users in Group1. Manager1 performs this review 12 hours before Manager2. The results of the group membership review are shown below:<br><br><table class="table table-bordered"><thead><tr><th>Group1 Member</th><th>Manager1</th><th>Manager2</th></tr></thead><tbody><tr><td>User1</td><td>Approve</td><td>Approve</td></tr><tr><td>User2</td><td>Deny</td><td>Deny</td></tr><tr><td>User3</td><td>Approve</td><td>Deny</td></tr><tr><td>User4</td><td>Deny</td><td>Approve</td></tr></tbody></table><br><br><strong>Statement:</strong> When the review period ends, User3 will still be a member of Group1.<br><br><strong>Is this statement true?</strong>',
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "When the review period ends, User3 will not be a member of Group1. Manager1 approved the membership, while Manager2 denied the membership. When there is a difference between the results of the two reviews, only the last submitted response is recorded. Given that Manager2’s response came after the response from Manager1, this second response will be recorded and User3 will be removed from Group1.",
      category: "Microsoft Entra / Identity Governance",
    },
    {
      code: "Q30",
      content:
        'Your organization uses access reviews to periodically review group membership for several groups. For Group1, these access reviews are done by Manager1 and Manager2.<br><br>A new access review cycle is started, and both managers are asked to review the group membership for the four users in Group1. Manager1 performs this review 12 hours before Manager2. The results of the group membership review are shown below:<br><br><table class="table table-bordered"><thead><tr><th>Group1 Member</th><th>Manager1</th><th>Manager2</th></tr></thead><tbody><tr><td>User1</td><td>Approve</td><td>Approve</td></tr><tr><td>User2</td><td>Deny</td><td>Deny</td></tr><tr><td>User3</td><td>Approve</td><td>Deny</td></tr><tr><td>User4</td><td>Deny</td><td>Approve</td></tr></tbody></table><br><br><strong>Statement:</strong> When the review period ends, User4 will still be a member of Group1.<br><br><strong>Is this statement true?</strong>',
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: true },
        { code: "B", content: "No", correct: false },
      ],
      explanation:
        "When the review period ends, User4 will still be a member of Group1. This is the reverse scenario of what occurred with User3. As the response from Manager2 came after the response from Manager1, the response from Manager2 will be recorded and the group membership for User4 will remain active.",
      category: "Microsoft Entra / Identity Governance",
    },
    {
      code: "Q31",
      content:
        "You are the administrator for your company.<br><br>The company is planning on implementing Microsoft Entra access reviews. You create an access review for a Microsoft Entra ID security group containing 125 users. The group has two group owners. You assign the two group owners as reviewers.<br><br>You need to calculate the amount of Microsoft Entra ID P2 licenses that your company needs in order to carry out the access review.<br><br><strong>How many Microsoft Entra ID P2 licenses should you use?</strong><br><br><strong>Choose the correct answer</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "3", correct: false },
        { code: "B", content: "127", correct: true },
        { code: "C", content: "125", correct: false },
        { code: "D", content: "2", correct: false },
      ],
      explanation:
        "You should use 127 Microsoft Entra ID P2 licenses. This is because the group owners (2) are doing the review, not the members (125), however members also require a license for access reviews. You need Microsoft Entra ID P2 licenses for users that perform the access reviews as well as the users that are being reviewed.<br><br>You should not only use 2 Microsoft Entra ID P2 licenses. That is, one license for each of the two group owners. There is a need to acquire licenses for the members of the group too.<br><br>You should not use 3 or 125 Microsoft Entra ID P2 licenses, because the group owners are doing the review and there are 125 users, therefore you need 127 Microsoft Entra ID P2 licenses.",
      category: "Microsoft Entra / Identity Governance",
    },
    {
      code: "Q32",
      content:
        'Your company has a Microsoft Entra ID P2 subscription.<br><br>Microsoft Entra ID GroupA includes the following users:<br><ul><li>User1, who is a member user and the owner of GroupA</li><li>User2, who is a guest user</li><li>User3, who is a member user</li></ul><br>You create a Microsoft Entra access review with the settings shown in the following table:<br><br><table class="table table-bordered"><thead><tr><th>Setting</th><th>Value</th></tr></thead><tbody><tr><td>Users to review</td><td>Members of a group</td></tr><tr><td>Scope</td><td>Everyone</td></tr><tr><td>Group</td><td>GroupA</td></tr><tr><td>Reviewers</td><td>Members (self)</td></tr></tbody></table><br><br>An access review is requested for User2.<br><br>You need to determine how to perform access reviews for User2.<br><br><strong>Who can perform an access review for User2?</strong><br><br><strong>Choose the correct answer</strong>',
      isHtmlContent: true,
      options: [
        { code: "A", content: "User2 only", correct: true },
        { code: "B", content: "User1 and User3 only", correct: false },
        { code: "C", content: "User1, User2, and User3", correct: false },
        { code: "D", content: "User1 only", correct: false },
      ],
      explanation:
        "Only User2 can perform an access review for User2. This is because the Reviewers parameter is set to Members (self). Since you have a Microsoft Entra ID P2 license, guest users can be used to perform self-reviews.<br><br>User1 and User3 cannot perform an access review for User2 because the access review is configured for self-review only.",
      category: "Microsoft Entra / Identity Governance",
    },
    {
      code: "Q33",
      content:
        "You are managing a Microsoft Entra environment.<br><br>You set up new access review for the Marketing group, as shown in the first exhibit. The Marketing group is made up of the three members shown in the other two exhibits.<br><br>In accordance with the access review, group members have to confirm whether they still need to be in the Marketing group. They confirm as follows:<ul><li>Member1 responds No on March 3, 2023</li><li>Member2 confirms as Yes on March 6, 2023</li><li>No decision has been made by Owner1</li></ul><br>You need to explain when members of the group can make their decisions.<br><br><strong>Statement:</strong> Member1 can change their decision on March 13, 2023.<br><br><strong>Is this statement true?</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: true },
        { code: "B", content: "No", correct: false },
      ],
      explanation:
        "Member1 can change their decision on March 13, 2023. As shown in the exhibit, the access review starts on March 1 and lasts 14 days, and therefore Member1 will be able to change their decision up until March 14, when the review ends.",
      category: "Microsoft Entra / Identity Governance",
    },
    {
      code: "Q34",
      content:
        "You are managing a Microsoft Entra environment.<br><br>You set up new access review for the Marketing group, as shown in the first exhibit. The Marketing group is made up of the three members shown in the other two exhibits.<br><br>In accordance with the access review, group members have to confirm whether they still need to be in the Marketing group. They confirm as follows:<ul><li>Member1 responds No on March 3, 2023</li><li>Member2 confirms as Yes on March 6, 2023</li><li>No decision has been made by Owner1</li></ul><br>You need to explain when members of the group can make their decisions.<br><br><strong>Statement:</strong> Member2 can change their decision on April 6, 2023.<br><br><strong>Is this statement true?</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "Member2 will not be able to change their decision on April 6, 2023. The series of reviews ends on April 1 and as such, Member2 will not be asked to make any more decisions.",
      category: "Microsoft Entra / Identity Governance",
    },
    {
      code: "Q35",
      content:
        "You are managing a Microsoft Entra environment.<br><br>You set up new access review for the Marketing group, as shown in the first exhibit. The Marketing group is made up of the three members shown in the other two exhibits.<br><br>In accordance with the access review, group members have to confirm whether they still need to be in the Marketing group. They confirm as follows:<ul><li>Member1 responds No on March 3, 2023</li><li>Member2 confirms as Yes on March 6, 2023</li><li>No decision has been made by Owner1</li></ul><br>You need to explain when members of the group can make their decisions.<br><br><strong>Statement:</strong> Owner1 can make their decision on March 17, 2023.<br><br><strong>Is this statement true?</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "Owner1 will not be able to make a decision on March 17, 2023. Group owners will not receive a notification to review their own access. The group membership of a group owner can only be removed upon the group’s deletion and is not influenced by access review. In order to govern groups with their owners, you would need to configure a group expiration policy.",
      category: "Microsoft Entra / Identity Governance",
    },
    {
      code: "Q36",
      content:
        "You are administering Microsoft Entra ID in your organization.<br><br>Your compliance officer asks you to configure a number of access reviews in order to support compliance initiatives and to track access assignments to applications, groups, and teams.<br><br>You need to set up Microsoft Entra ID Governance to meet the requirements and you must minimize administrative efforts.<br><br><strong>What should you do first?</strong><br><br><strong>Choose the correct answer</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Create a catalog.", correct: false },
        { code: "B", content: "Create an access review.", correct: false },
        { code: "C", content: "Create a program.", correct: true },
        { code: "D", content: "Create a policy initiative.", correct: false },
      ],
      explanation:
        "You should create a program first. A program within Microsoft Entra ID Governance refers to a container that holds a set of policies, procedures, and workflows that organizations can use to manage and review user access to applications and resources in Microsoft Entra ID. Depending on your requirements, you can create multiple custom programs that hold everything you need to govern identities for your specific goal, such as a compliance initiative or new employee onboarding, for example. As such, all of your policies, procedures, and workflows for a specific initiative can be identified quickly in one place, thereby fulfilling the requirements and minimizing the amount of administrative effort.<br><br>You should not create a catalog first. A catalog in Microsoft Entra ID Governance is a repository of information about the available applications and resources, including their features and functionalities, and it also covers the permissions and access that users require to use them. A user can utilize a catalog to request access to applications and resources, whereas a program provides control over how long a user is allowed to access approved resources. In this scenario, you need to provide a solution to track access to resources, not request it.<br><br>You should not create an access review first. An access review in Microsoft Entra ID Governance is a process by which organizations can regularly review and evaluate users' access to applications and resources in Microsoft Entra ID. Access reviews can be performed on a regular schedule or ad-hoc, and they assess the user’s access to determine whether it is still appropriate, so that changes can be made as needed. Although you can use access review to track a user’s access to resources, it is a single activity, whereas a program is a set of activities. For example, you cannot use a single access review to review access to teams, groups, and applications. You would need to create at least two separate access reviews (one for applications, and another for teams and groups), and these should be organized into programs. You cannot move a previously created access review into a program. You have to create a program first and then create the access review within that program.<br><br>You should not create a policy initiative. Azure Policy initiatives are a way to enforce governance policies that relate to the configuration and management of Azure resources. They allow administrators to create, manage, and enforce policies that govern the behavior of Azure resources. For example, policies can be created to enforce encryption, resource locks, and spending controls. In this scenario, you were asked to manage user access and not the behavior of Azure resources.",
      category: "Microsoft Entra / Identity Governance",
    },
    {
      code: "Q37",
      content:
        "You work as an Azure administrator for Company1.<br><br>Following a security incident, you were asked to review the procedure of granting administrative access to your Azure environment for other administrators in your organization. You discovered that there are several administrators who can access the Azure portal using their regular account.<br><br>You need to provide a way to grant access to these administrators while also providing an audit trail for the access they use. The access rights for these accounts should only be available when requested.<br><br><strong>What should you suggest as an improvement?</strong><br><br><strong>Choose the correct answer</strong>",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content:
            "Enable the Restrict access to Microsoft Entra ID administration portal option in the Microsoft Entra ID User settings.",
          correct: false,
        },
        {
          code: "B",
          content:
            "Set up a user risk policy in the Microsoft Entra ID Security identity protection settings.",
          correct: false,
        },
        { code: "C", content: "Implement Conditional Access.", correct: false },
        {
          code: "D",
          content:
            "Implement Microsoft Entra Privileged Identity Management (PIM).",
          correct: true,
        },
      ],
      explanation:
        "You should implement Microsoft Entra Privileged Identity Management (PIM). Using this feature, you can grant just-in-time elevated rights to regular user accounts, using strong authentication. PIM is commonly used for securing administrative accounts. When using PIM, an account does not have elevated rights until these rights are explicitly requested. An approval workflow can be part of this process. Therefore, even if an attacker gains access to an account, they will not be able to use these elevated rights. This will make your environment more secure. Additionally, the elevation of access rights leaves a paper trail, giving you more insight into high-risk operations in your environment.<br><br>You should not implement Conditional Access. Conditional Access allows you to grant or block access to resources based on specific conditions. However, it cannot provide just-in-time elevation of access rights.<br><br>You should not enable the Restrict access to Microsoft Entra ID administration portal option. This will block access to the Microsoft Entra ID administration portal for non-admin users, but it will not limit the access of users with additional rights.<br><br>You should not set up a user risk policy. A user risk policy allows you to block specific risks, such as a login from an unfamiliar location, but it will not let you control the access rights for specific accounts.",
      category: "Microsoft Entra / Privileged Identity Management",
    },
    {
      code: "Q38",
      content:
        "You work as an identity and access administrator.<br><br>Your company's security team wants to enable just-in-time, time-bound privileged access to Microsoft Entra ID, Azure, and Microsoft 365 resources.<br><br>You need to ensure that the security team receives notifications when privileged roles are activated and that they are able to download the company's audit history for external audit purposes.<br><br><strong>What should you use?</strong><br><br><strong>Choose the correct answer</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Azure Bastion", correct: false },
        {
          code: "B",
          content: "Microsoft Entra Privileged Identity Management (PIM)",
          correct: true,
        },
        { code: "C", content: "Microsoft Sentinel", correct: false },
        {
          code: "D",
          content: "Privileged Access Management (PAM)",
          correct: false,
        },
      ],
      explanation:
        "You should use Microsoft Entra Privileged Identity Management (PIM). PIM enables just-in-time access to your Microsoft cloud resources. With PIM, you can specify the start and end dates for your privileged access, request justifications, enforce approvals, and get notified when privileged roles are activated. You can also download audit history for both internal and external audit purposes.<br><br>You should not use Azure Bastion. Azure Bastion is a fully managed service that enables Remote Desktop Protocol (RDP) or Secure Shell Protocol (SSH) connectivity to your Azure Virtual Machines (VMs) via the Azure portal. Your VMs do not require a public IP address when you use Azure Bastion because connection is established via internal IP addresses within your Azure Virtual Network (VNet). You cannot use Azure Bastion to access other Microsoft cloud resources.<br><br>You should not use Microsoft Sentinel. Microsoft Sentinel is a security information event management (SIEM) and security orchestration automated response (SOAR) solution. You can use Microsoft Sentinel to collect security data across your enterprise, to detect threats, investigate critical incidents, enable rapid response, and automated protection. Microsoft Sentinel cannot provide just-in-time, time-bound privileged access to Microsoft Entra ID, Azure, and Microsoft 365 resources.<br><br>You should not use Privileged Access Management (PAM). PAM is a solution that can help you to re-establish control over a compromised AD environment by maintaining a separate protected environment. Additionally, you can use PAM to manage the use of privileged accounts in your Active Directory Domain Services. The scope of PAM is limited by the boundaries of your on-premises AD. To manage privileged access to Microsoft Entra ID, Azure, and Microsoft 365 resources, you should use PIM.",
      category: "Microsoft Entra / Privileged Identity Management",
    },
    {
      code: "Q39",
      content:
        "You are an identity and access administrator at your company.<br><br>You want to enable Microsoft Entra Privileged Identity Management (PIM) for just-in-time, time-bound privileged access to Microsoft Entra ID, Azure, and Microsoft 365 resources.<br><br>You need to determine what features are supported in PIM.<br><br><strong>Statement:</strong> You can use PIM to manage the Service Administrator role.<br><br><strong>Select Yes if the statement is true. Otherwise, select No.</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "You cannot use Microsoft Entra Privileged Identity Management (PIM) to manage the Service Administrator role. Classic Azure subscription Administrator roles such as Service Administrator, Account Administrator, and Co-Administrator are not supported in PIM.",
      category: "Microsoft Entra / Privileged Identity Management",
    },
    {
      code: "Q40",
      content:
        "You are an identity and access administrator at your company.<br><br>You want to enable Microsoft Entra Privileged Identity Management (PIM) for just-in-time, time-bound privileged access to Microsoft Entra ID, Azure, and Microsoft 365 resources.<br><br>You need to determine what features are supported in PIM.<br><br><strong>Statement:</strong> You can use PIM to manage the Exchange Administrator role.<br><br><strong>Select Yes if the statement is true. Otherwise, select No.</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: true },
        { code: "B", content: "No", correct: false },
      ],
      explanation:
        "You can use PIM to manage the Exchange Administrator role. PIM supports the management of all Microsoft 365 roles such as the Exchange and SharePoint Administrator. However, PIM does not support specific roles within Exchange or SharePoint Role-Based Access Control (RBAC).",
      category: "Microsoft Entra / Privileged Identity Management",
    },
    {
      code: "Q41",
      content:
        "You are an identity and access administrator at your company.<br><br>You want to enable Microsoft Entra Privileged Identity Management (PIM) for just-in-time, time-bound privileged access to Microsoft Entra ID, Azure, and Microsoft 365 resources.<br><br>You need to determine what features are supported in PIM.<br><br><strong>Statement:</strong> You can use PIM with all Microsoft Entra ID plans.<br><br><strong>Select Yes if the statement is true. Otherwise, select No.</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "You cannot use PIM with all Microsoft Entra ID plans. To use PIM, you should use the Microsoft Entra ID P2 plan.",
      category: "Microsoft Entra / Privileged Identity Management",
    },
    {
      code: "Q42",
      content:
        "Your company has a Microsoft Entra tenant.<br><br>You are the only person who has administrative access to your Microsoft Entra ID, and this is highlighted as potentially risky by your Business Continuity team.<br><br>You need to configure an emergency break-glass account to mitigate the risk.<br><br><strong>Which two actions should you perform?</strong> Each correct answer presents part of the solution.<br><br><strong>Choose the correct answers</strong>",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content:
            "Make the authentication method of the break-glass account different from the methods used by the other administrative accounts.",
          correct: true,
        },
        {
          code: "B",
          content:
            "Permanently assign the Global administrator role to the break-glass account.",
          correct: true,
        },
        {
          code: "C",
          content:
            "Associate the break-glass account with your existing administrative account.",
          correct: false,
        },
        {
          code: "D",
          content:
            "Maintain the break-glass account in an on-premises AD and synchronize it to Microsoft Entra ID.",
          correct: false,
        },
      ],
      explanation:
        "You should permanently assign the Global administrator role to the break-glass account and make the authentication method of the break-glass account different from the methods used by the other administrative accounts. The permanent assignment of the Global administrator role will ensure that, in the event of an emergency, you can immediately gain administrative access, without dependency on other people or processes to assign the Global Administrator role. Using different authentication methods can help you to mitigate the risks of your primary administrative accounts being blocked because of issues with specific authentication solutions, such as the failure of your on-premises multi-factor authentication (MFA) server, for example.<br><br>You should not maintain the break-glass account in an on-premises AD and synchronize it to Microsoft Entra ID. The synchronization of an on-premises account to the cloud adds additional dependency that you should avoid for the emergency accounts. That is why Microsoft Entra break-glass accounts should be set up as cloud-only and you should use the default onmicrosoft.com domain instead of your custom domain.<br><br>You should not associate the break-glass account with your existing administrative account. You need to ensure that your break-glass account is not connected to a mobile phone, software/hardware tokens, or any other credentials kept by the existing administrators. Instead, you need to associate the break-glass account with registered devices that are kept in a known, secure location, so that they can be used in case of emergency.",
      category: "Microsoft Entra / Break-glass accounts",
    },
    {
      code: "Q43",
      content:
        "You have a Microsoft 365 tenant.<br><br>You are configuring an app registration for a line-of-business (LOB) app that is business-critical.<br><br>You need to configure the application credentials to expire in four years with the least administrative effort.<br><br><strong>Which two steps should you take?</strong> Each correct answer presents part of the solution.<br><br><strong>Choose the correct answers</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Upload the certificate.", correct: true },
        {
          code: "B",
          content: "Generate a certificate that lasts for four years.",
          correct: true,
        },
        {
          code: "C",
          content: "Save the client secret in Azure Key Vault.",
          correct: false,
        },
        {
          code: "D",
          content: "Generate a client secret that lasts for four years.",
          correct: false,
        },
      ],
      explanation:
        "You should generate a certificate that lasts for four years. A certificate should be requested from a trusted Certificate Authority (CA) that lasts for four years. Obtaining certificates from a CA ensures security and compliance with best practices.<br><br>You should also upload the certificate. The app registration requires the certificate in either the .cer, .pem or .crt. format in order to accept authentication requests from the line-of-business (LOB) application.<br><br>You should not generate a client secret that lasts for four years. The maximum expiration date for client secrets is 24 months.<br><br>You should not save the client secret in Azure Key Vault. While it is a good idea to save client secrets in Azure Key Vault in order to protect them, the client secret option is not correct due to the scenario requirement of a four-year expiration period.",
      category: "Microsoft Entra / App registrations",
    },
    {
      code: "Q44",
      content:
        'Your company has a Microsoft 365 tenant.<br><br>You are implementing emergency access accounts following Microsoft recommendations.<br><br>You need to select a domain to use for the User Principal Name of these break-glass accounts from the list shown below:<br><br><table class="table table-bordered"><thead><tr><th>Domains</th><th>State</th></tr></thead><tbody><tr><td>company.onmicrosoft.com</td><td>Default tenant domain</td></tr><tr><td>company.com</td><td>Federated</td></tr><tr><td>it.company.com</td><td>Synchronized</td></tr></tbody></table><br><br><strong>Which domain should you use?</strong><br><br><strong>Choose the correct answer</strong>',
      isHtmlContent: true,
      options: [
        { code: "A", content: "company.onmicrosoft.com", correct: true },
        { code: "B", content: "company.com", correct: false },
        {
          code: "C",
          content: "Create a new dedicated custom domain",
          correct: false,
        },
        { code: "D", content: "it.company.com", correct: false },
      ],
      explanation:
        "You should use company.onmicrosoft.com. Using the default tenant domain allows you to access the tenant in the event of an emergency that is affecting the other domains. It also adds a layer of extra security, because federated or synchronized accounts might be compromised via your on-premises infrastructure. This is Microsoft's recommended solution.<br><br>You should not use company.com because it is a federated domain. If your Active Directory Federation Services (AD FS) service was affected, you would not be able to access your emergency account.<br><br>You should not use it.company.com because it is a synchronized domain, making it vulnerable to attacks or changes on-premises.<br><br>You should not create a new dedicated custom domain. A new dedicated domain would incur unnecessary administrative efforts and costs. It is not recommended by Microsoft.",
      category: "Microsoft Entra / Break-glass accounts",
    },
    {
      code: "Q45",
      content:
        "You are the administrator for your company. Your company is using Microsoft Entra Connect to synchronize users from Active Directory to Microsoft Entra ID.<br><br>You are implementing privileged access using Microsoft Entra Privileged Identity Management (PIM).<br><br>You need to create emergency access accounts for the Microsoft Entra tenant.<br><br><strong>Which two actions should you perform?</strong> Each correct answer presents part of the solution.<br><br><strong>Choose the correct answers</strong>",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content:
            "Assign a permanent Global Administrator role to the account.",
          correct: true,
        },
        {
          code: "B",
          content:
            "Assign a temporary Global Administrator role to the account.",
          correct: false,
        },
        {
          code: "C",
          content:
            "Create the account in Active Directory and sync it to Microsoft Entra ID.",
          correct: false,
        },
        {
          code: "D",
          content: "Create the account in Microsoft Entra ID.",
          correct: true,
        },
      ],
      explanation:
        "You should create the account in Microsoft Entra ID. Emergency access accounts need to be cloud-only, so they must be created directly in Microsoft Entra ID. Microsoft Entra ID prevents the last Global Administrator account from being deleted, but when you are using a synced account, this cannot be prevented from happening. The account can be disabled or deleted on-premises. The account needs to use the .onmicrosoft.com domain.<br><br>You should also assign a permanent Global Administrator role to the account. Assignments should not expire for emergency access accounts.<br><br>You should not create the account in Active Directory and sync it to Microsoft Entra ID. Emergency access accounts need to be cloud-only, so they must be created directly in Microsoft Entra ID.<br><br>You should not assign a temporary Global Administrator role to the account. Assignments should not expire for emergency access accounts.",
      category: "Microsoft Entra / Break-glass accounts",
    },
    {
      code: "Q46",
      content:
        "You are the administrator for your company. Your company is implementing Microsoft Entra Privileged Identity Management (PIM).<br><br>You need to create a role-assignable group in Microsoft Entra ID.<br><br><strong>Which two administrator roles would allow you to perform this action?</strong> Each correct answer presents a complete solution.<br><br><strong>Choose the correct answers</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Groups Administrator", correct: false },
        { code: "B", content: "Global Administrator", correct: true },
        { code: "C", content: "Privileged Role Administrator", correct: true },
        {
          code: "D",
          content: "Identity Governance Administrator",
          correct: false,
        },
      ],
      explanation:
        "The Privileged Role Administrator and Global Administrator roles would allow you to create a role-assignable group in Microsoft Entra ID. Users with these roles are able to switch on the Microsoft Entra roles can be assigned to the group option when a security group is created.<br><br>The Groups Administrator role will not allow you to create a role-assignable group in Microsoft Entra ID. Users with the Groups Administrator role can create and manage all security groups and Microsoft 365 groups, excluding role-assignable groups.<br><br>The Identity Governance Administrator role will not allow you to create a role-assignable group in Microsoft Entra ID. Users with the Identity Governance Administrator role are not able to create role-assignable groups in Microsoft Entra ID.",
      category: "Microsoft Entra / Privileged Identity Management",
    },
    {
      code: "Q47",
      content:
        "You are a Microsoft 365 administrator for CompanyA. CompanyA uses Microsoft Entra Privileged Identity Management (PIM).<br><br>The current settings for the User Administrator role are shown in the exhibit.<br><br>You need to ensure that the correct users approve User Administrator role requests.<br><br><strong>Which two users will receive the approval requests for the User Administrator role?</strong> Each correct answer presents a complete solution.<br><br><strong>Choose the correct answers</strong>",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Users with the User Administrator role",
          correct: false,
        },
        {
          code: "B",
          content: "Users with the Global Administrator role",
          correct: true,
        },
        {
          code: "C",
          content: "Users with the Group Administrator role",
          correct: false,
        },
        {
          code: "D",
          content: "Users with the Privileged Role Administrator role",
          correct: true,
        },
      ],
      explanation:
        "Users with either the Global Administrator or the Privileged Role Administrator role will receive the approval requests. If no specific approvers are selected in the settings, as shown by the None state for the Approvers setting, then Privileged Role Administrators and Global Administrators will become the default approvers.<br><br>Users with the User Administrator or Group Administrator role will not get the approval requests. If no specific approvers are selected, Privileged Role Administrators and Global Administrators will become the default approvers.",
      category: "Microsoft Entra / Privileged Identity Management",
    },
    {
      code: "Q48",
      content:
        "You deploy a Microsoft Entra tenant and synchronize it with your company's on-premises AD DS domain. The company wants to prevent the possibility of being locked out of your Microsoft Entra ID organization because you cannot sign in or activate another user's account as an administrator. You are setting up emergency access in case of emergency or break-glass scenarios where administrative accounts can be used.<br><br>You need to identify the requirements for setting up emergency access for these scenarios.<br><br><strong>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</strong><br><br><table class=\"table table-bordered\"><thead><tr><th>Statement</th><th>Yes</th><th>No</th></tr></thead><tbody><tr><td>You must create at least two emergency access accounts.</td><td></td><td>✔️</td></tr><tr><td>You should synchronize the emergency access accounts with the on-premises domain.</td><td></td><td>✔️</td></tr><tr><td>You should not associate the emergency access accounts with any individual user.</td><td>✔️</td><td></td></tr></tbody></table>",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "You must create at least two emergency access accounts.",
          correct: false,
        },
        {
          code: "B",
          content:
            "You should synchronize the emergency access accounts with the on-premises domain.",
          correct: false,
        },
        {
          code: "C",
          content:
            "You should not associate the emergency access accounts with any individual user.",
          correct: true,
        },
      ],
      explanation:
        "You do not need to create at least two emergency access accounts. Although Microsoft recommends that you should create at least two emergency access accounts to help mitigate the risk of being completely locked out, an organization can choose to create a single emergency access account.<br><br>Emergency access accounts should not be synchronized with the on-premises domain. Emergency access accounts should be created as cloud-only accounts that use the *.onmicrosoft.com domain. The accounts are not federated or synchronized from an on-premises domain.<br><br>You should not associate emergency access accounts with any individual user. In addition, the accounts should not be connected with employee-supplied mobile devices or any employee-specific credentials. Any registered devices associated with an account should be kept in a known, secure location.",
      category: "Microsoft Entra / Emergency Access",
    },
    {
      code: "Q49A",
      content:
        "You deploy a Microsoft Entra tenant and synchronize it with your company's on-premises AD DS domain.<br><br>You need to identify the requirements for setting up emergency access.<br><br><strong>Statement:</strong> You must create at least two emergency access accounts.<br><br><strong>Is this statement true?</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "You do not need to create at least two emergency access accounts. Although Microsoft recommends that you should create at least two emergency access accounts to help mitigate the risk of being completely locked out, an organization can choose to create a single emergency access account.",
      category: "Microsoft Entra / Emergency Access",
    },
    {
      code: "Q49B",
      content:
        "You deploy a Microsoft Entra tenant and synchronize it with your company's on-premises AD DS domain.<br><br>You need to identify the requirements for setting up emergency access.<br><br><strong>Statement:</strong> You should synchronize the emergency access accounts with the on-premises domain.<br><br><strong>Is this statement true?</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "Emergency access accounts should not be synchronized with the on-premises domain. They should be created as cloud-only accounts that use the *.onmicrosoft.com domain.",
      category: "Microsoft Entra / Emergency Access",
    },
    {
      code: "Q49C",
      content:
        "You deploy a Microsoft Entra tenant and synchronize it with your company's on-premises AD DS domain.<br><br>You need to identify the requirements for setting up emergency access.<br><br><strong>Statement:</strong> You should not associate the emergency access accounts with any individual user.<br><br><strong>Is this statement true?</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: true },
        { code: "B", content: "No", correct: false },
      ],
      explanation:
        "You should not associate emergency access accounts with any individual user. They should not be connected with employee-supplied devices or any employee-specific credentials.",
      category: "Microsoft Entra / Emergency Access",
    },
    {
      code: "QX",
      content:
        "You are administering Privileged Identity Management (PIM).<br><br>The Billing Administrator role has been configured with the settings shown in the exhibit.<br>You need to verify the role settings of the Billing Administrator<ul><li>Billing Administrators must perform MFA authentication every <strong>1 hour</strong>.</li><li>The activation must be approved by <strong>a Privileged Role Administrator or a Global Administrator</strong>.</li></ul>?",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: true },
        { code: "B", content: "No", correct: false },
      ],
      explanation:
        "Billing Administrators must perform MFA authentication every 1 hour. Microsoft Entra Privileged Identity Management (PIM) is a feature in Microsoft Entra ID that helps organizations to manage, control, and monitor the use of elevated privileges in Azure resources. With Microsoft Entra PIM, administrators can assign privileged roles, such as Global Administrator or Resource Group Owner, to users on a just-in-time (JIT) basis and with approval workflows. This helps to reduce the risk of exposure and unauthorized access to sensitive resources. Multifactor authentication (MFA) is a security process that requires users to provide two or more authentication factors to access an account or system. The configuration in this scenario requires users to perform MFA upon activation. Since the activation expires every hour, the Billing Administrator will have to perform MFA to activate the role again.\n\nThe activation must be approved by a Privileged Role Administrator or a Global Administrator. An approver for Microsoft Entra PIM activation has to review and then either approve or deny activation requests for privileged roles within Azure. If the Approver field is not set, PIM sets by default the approver to be all users who are privileged role administrators, whether they are permanent or eligible. Although the other mentioned administrators can approve the activation as well, they are not the only ones who can do the task.",
      category: "Microsoft Entra / PIM",
    },
    {
      code: "QY",
      content:
        "You are the Identity Governance administrator at your company.<br><br>The company is using Microsoft Entra Identity Governance to manage entitlements for external user accounts. It has recently become apparent that the management of resource catalogs through the Azure Portal is too error-prone. You are tasked with helping an external developer to create a web application to automate the process.<br><br>You need to request the Microsoft Graph API permissions required for the developer to create new resource catalogs programmatically, applying the principle of least privilege.<br><br><strong>What should you do?</strong><br><br><strong>Choose the correct answer</strong><br>",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content:
            "Enable a managed identity in the Identity Governance portal.",
          correct: false,
        },
        {
          code: "B",
          content:
            "Instruct the Application administrator to create an app registration with the EntitlementManagement.ReadWrite.All delegated permission.",
          correct: true,
        },
        {
          code: "C",
          content:
            "Instruct the Application administrator to create an app registration and assign it the Identity Governance administrator role.",
          correct: false,
        },
        {
          code: "D",
          content:
            "Instruct the Application administrator to create an app registration with the EntitlementManagement.Write.All application permission.",
          correct: false,
        },
      ],
      explanation:
        "You should instruct the Application administrator to create an app registration with the EntitlementManagement.ReadWrite.All delegated permission. This is the correct way to access and create a catalog with a resource using the Microsoft Graph API using OAUTH2 or OpenID Connect. This is the least privileged permission to do so.<br><br>You should not instruct the Application administrator to create an app registration and assign it the Identity Governance administrator role. This would work, but it is not the least privileged role. That would be the Catalog creator role.<br><br>You should not instruct the Application administrator to create an app registration with the EntitlementManagement.Write.All application permission. This would grant the application access to the Entitlements API without a user logged in, thus diverging from the principle of least privilege.<br><br>You should not enable a managed identity in the Identity Governance portal. The Identity Governance portal does not support managed identities.",
      category: "Microsoft Entra / Identity Governance",
    },
    {
      code: "QZ",
      content:
        "You work as an administrator for Company1.<br><br>When analyzing your Microsoft Entra ID, you notice that a group named Group1 has been created by someone else.<br><br>You need to determine who created this group.<br><br><strong>What should you use to meet the requirement?</strong><br><br><strong>Choose the correct answer</strong>",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Microsoft Entra provisioning logs",
          correct: false,
        },
        {
          code: "B",
          content: "Microsoft Entra sign-in logs",
          correct: false,
        },
        {
          code: "C",
          content: "Microsoft Entra Usage and insights reports",
          correct: false,
        },
        {
          code: "D",
          content: "Microsoft Entra audit logs",
          correct: true,
        },
      ],
      explanation:
        "You should use Microsoft Entra audit logs. The audit logs in Microsoft Entra ID provide system activity information, such as the creation of users and groups, therefore it enables you to find out who created Group1.<br><br>You should not use Microsoft Entra sign-in logs. Sign-in logs provide information about sign-in information for user accounts, but will not provide information on the creation of users or groups.<br><br>You should not use Microsoft Entra provisioning logs. Provisioning logs provide information about the integration of third-party applications for provisioning in your Microsoft Entra ID. For example, if you let your HR system automatically create user accounts based on information entered for new hires, you can find the related logs here.<br><br>You should not use Microsoft Entra Usage and insights reports. These reports provide you with additional information on the usage of your Active Directory environment. For example, they can let you know how many users have registered for multi-factor authentication (MFA) or what applications are used most in your environment. It does not provide information about the provisioning of user accounts.",
      category: "Microsoft Entra / Audit and Monitoring",
    },
    {
      code: "QZ2",
      content:
        "You are an administrator for your company. A user reports an access issue in Office 365. You review the user's sign-in logs, as shown in the two exhibits.<br><br>You need to provide a solution to allow the user to access Office 365.<br><br><strong>What should you do?</strong><br><br><strong>Choose the correct answer</strong>",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Ask the user to enable Windows Firewall.",
          correct: false,
        },
        {
          code: "B",
          content: "Ask the user to enroll for multi-factor authentication.",
          correct: false,
        },
        {
          code: "C",
          content: "Ask the user to enroll their device in Intune.",
          correct: true,
        },
        {
          code: "D",
          content: "Ask the user to update Windows Defender.",
          correct: false,
        },
      ],
      explanation:
        "You should ask the user to enroll their device in Intune. The sign-in logs show that access is blocked for non-compliant devices, so the user needs to enroll in order to become compliant.<br><br>You should not ask the user to enroll for multi-factor authentication (MFA). Enrolling for MFA will not make their device compliant. In order to make it compliant, the device needs to be enrolled in Intune.<br><br>You should not ask the user to enable Windows Firewall or to update Windows Defender. As shown in the exhibit, the device is not enrolled yet, so updating Windows Defender or enabling the Windows Firewall does not meet the requirements of the Conditional Access policy.",
      category: "Microsoft Entra / Device Compliance and Conditional Access",
    },
    {
      code: "QZ3",
      content:
        "You are administering Microsoft Entra ID in your organization.<br><br>You configure Microsoft Entra ID to send logs to a Log Analytics workspace.<br><br>You need to use a KQL query to create a graphical report about user sign-ins per location.<br><br><strong>What KQL operator should you use to meet the requirement?</strong><br><br><strong>Choose the correct answer</strong>",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "summarize",
          correct: false,
        },
        {
          code: "B",
          content: "print",
          correct: false,
        },
        {
          code: "C",
          content: "render",
          correct: true,
        },
        {
          code: "D",
          content: "project",
          correct: false,
        },
      ],
      explanation:
        "You should use the render KQL operator. Kusto Query Language (KQL), is a query language that is used to query data in Azure Monitor, Azure Log Analytics, and Azure Data Explorer. The render operator is used to format and display the results of a KQL query in a specific format, such as a chart or table. The render operator specifies the type of visualization and the way data is displayed in the results.<br><br>You should not use the project KQL operator. The project operator in KQL is used to select and reshape data from a query. It is used to select, remove, and rename columns of data, and also to aggregate data. You would utilize it to manipulate the data in a query by specifying which columns to include, exclude, or rename. In this scenario, you need to create graphical report and, as such, this option does not meet the requirement.<br><br>You should not use the print KQL operator. The print operator in KQL is used to display the results of a query in the command-line interface (CLI). The print operator is a useful tool for troubleshooting and debugging queries, as it provides a way to see the results of a query in real time and ensure that the query is returning the expected data. This operator cannot help to display the results graphically.<br><br>You should not use the summarize KQL operator. The summarize operator in KQL is used to aggregate data from a table, based on one or more columns. It can be used to perform operations like sum, count, min, max, average, etc., on specified columns. The resulting aggregation is returned in a new table with a single row that summarizes the data.",
      category: "Microsoft Entra / KQL & Monitoring",
    },
    {
      code: "QZ4",
      content:
        "You work as an Microsoft Entra ID administrator for a bank. The bank has thousands of full-time employees and part-time contractors spread across the globe.<br><br>To track what is happening in the environment you manually download Microsoft Entra Sign-in logs on an ad-hoc basis in comma separated value (CSV) format.<br><br>You need to be able to view reports in the form of dashboards that can provide a comprehensive breakdown of sign-ins and system-wide activity within the Microsoft Entra tenant. The solution must be implemented in the most effective way and minimize administrative effort.<br><br><strong>What solution should you recommend?</strong><br><br><strong>Choose the correct answer</strong>",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Playbook",
          correct: false,
        },
        {
          code: "B",
          content: "Microsoft Excel chart",
          correct: false,
        },
        {
          code: "C",
          content: "Workbooks",
          correct: true,
        },
        {
          code: "D",
          content: "Power BI",
          correct: false,
        },
      ],
      explanation:
        "You should recommend Microsoft Entra Workbooks. Workbooks provides a built-in platform for creating, managing, and sharing interactive reports and dashboards based on data stored in Azure Log Analytics workspaces. It allows you to create interactive and customizable reports and dashboards with your data, providing a way to visualize and communicate information in a clear and concise way. To be able to use Microsoft Entra logs visualizations in Workbooks, you need to activate log export into an Azure Log Analytics workspace. You can use a range of pre-built visualizations or you can create your custom visualizations with minimal administrative effort.<br><br>You should not recommend a Microsoft Excel chart. A Microsoft Excel chart is a graphical representation of data in a spreadsheet. It is used to visually display data in a meaningful and easily understandable way, helping to identify patterns, trends, and relationships in the data. The data can be imported from external sources such as databases, text files, or other spreadsheets, or it can be entered manually. Although it is possible to use Excel to create reports in the form of dashboards, it does not minimize administrative effort.<br><br>You should not recommend Power BI. Power BI is a business intelligence and data visualization tool developed by Microsoft. It allows users to connect to, analyze, and visualize data from a variety of sources, in order to gain insights and make data-driven decisions. The tool allows you to import and connect to data from a wide range of sources, including Excel spreadsheets, cloud-based data sources, databases, and online services. It is possible to use Power BI to visualize the Sign-ins logs as requested, but it is not the most effective way and it adds additional administrative overhead. As such, this solution does not meet the requirements as Microsoft Entra Workbooks is a better solution for the visualization of logs.<br><br>You should not recommend a playbook. Playbooks are a feature of Microsoft Sentinel that enable you to automate incident response procedures. Microsoft Sentinel is a cloud-native security information and event management (SIEM) solution that helps organizations to detect and respond to security threats in real time. With Microsoft Sentinel playbooks, you can automate routine and repetitive tasks associated with incident response, such as triaging, isolating, and investigating potential security incidents.",
      category: "Microsoft Entra / Monitoring & Reporting",
    },
    {
      code: "QZ5",
      content:
        "You have been asked to work on improving the Microsoft Entra Identity secure score for your organization.<br><br>You have identified that one of the recommendations provided in Identity Secure Score will not work for your environment.<br><br><strong>Which recommendation status should you set for the provided recommendation of an improvement action?</strong><br><br><strong>Choose the correct answer</strong>",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Risk accepted",
          correct: true,
        },
        {
          code: "B",
          content: "Planned",
          correct: false,
        },
        {
          code: "C",
          content: "To address",
          correct: false,
        },
        {
          code: "D",
          content: "Resolved through alternate mitigation",
          correct: false,
        },
      ],
      explanation:
        "You should set Risk accepted as the recommendation status. This status is typically used when implementing the recommendation may have a negative impact on the organization’s operations or when the organization has determined that the risk associated with the recommendation is acceptable given the organization’s overall security posture. You will not be given any points, but the action will no longer be visible in the list of improvement actions.<br><br>You should not set To address as the recommendation status. The To address recommendation status indicates that there is a security recommendation that has been identified as a potential security risk to an organization’s Microsoft Entra identity infrastructure. This status shows that the recommendation has not been implemented and is still outstanding.<br><br>You should not set Planned as the recommendation status. The Planned status is used to indicate that the organization has taken the necessary steps to prioritize the recommendation and intends to implement it soon. It may indicate that the organization has developed a plan, assigned resources, and scheduled the implementation of the recommendation.<br><br>You should not set Resolved through alternate mitigation as the recommendation status. This status is typically used when an organization has implemented a different solution to mitigate the security risk associated with a recommendation, but the solution is not the exact implementation of the recommendation suggested by Microsoft Entra Identity Secure Score. Your secure score will be given the points that the action is worth, and as such your score will better reflect the organization's overall security posture.",
      category: "Microsoft Entra / Identity Secure Score",
    },
    {
      code: "QZ6",
      content:
        "Your company uses Microsoft Entra ID.<br><br>Multiple Microsoft Entra ID user accounts have been compromised in a recent security incident and are now blocked from signing in. SecAdmin1 logs into Microsoft Entra ID to look at the usage and insights report. However, they can only see information about their own sign-ins. Upon further investigation, you find that SecAdmin1 does not have any elevated permissions.<br><br>You need to elevate SecAdmin1’s identity privilege to allow them to access information from the usage and insights report. Your solution should adhere to the principle of least privilege.<br><br><strong>What role should you assign SecAdmin1?</strong><br><br><strong>Choose the correct answer</strong>",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Security Administrator",
          correct: false,
        },
        {
          code: "B",
          content: "Report Reader",
          correct: true,
        },
        {
          code: "C",
          content: "Security Reader",
          correct: false,
        },
        {
          code: "D",
          content: "Global Reader",
          correct: false,
        },
      ],
      explanation:
        "You should assign the Report Reader role to the SecAdmin1 account. This built-in role only grants access to read sign-in and audit reports, therefore meeting the requirement of adhering to the principle of least privilege. All the other roles in the options grant additional permissions.<br><br>You should not assign the Security Reader role to the SecAdmin1 account. This is a built-in role that allows users to read security information and reports within Microsoft Entra ID and Office 365. Although this would grant the SecAdmin1 account the access they need, it would also give them full reader access to security information that they do not currently need, so it would not adhere to the principle of least privilege.<br><br>You should not assign the Security Administrator role to the SecAdmin1 account. This is a built-in role that allows users to manage configuration in Microsoft Entra and Office 365, as well as read security reports and content. Although this would grant the SecAdmin1 account the access they need, it would also give them full management access to security information that they do not currently need, so it would not adhere to the principle of least privilege.<br><br>You should not assign the Global Reader role to the SecAdmin1 account. This is a built-in role that allows users to read everything within the Microsoft 365 tenant. It has the same read permissions as the Global Admin account, the only difference being it does not give access to manage or configure any services. Although this would grant the SecAdmin1 account the access they need, it would also give them full reader access to information on the entire tenant that they do not currently need, so it would not adhere to the principle of least privilege.",
      category: "Microsoft Entra / Roles and Privileges",
    },
    {
      code: "QX",
      content: `Your organization uses Microsoft Entra to manage identity and access permissions to its Azure-hosted resources.<br><br>
You have configured Microsoft Entra Permissions Management to collect information and analyze all identity types. After doing a health assessment on the Infrastructure, you gather the following information:<br><br>
<table class="table table-bordered">
  <thead>
    <tr><th>Username</th><th>Tasks Accessed in last 60 days</th><th>Current Role Assignment</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>AdminA</td>
      <td>
        <ul>
          <li>Created virtual machines (VMs)</li>
          <li>Added virtual disks to VM</li>
          <li>Installed software on VM</li>
        </ul>
      </td>
      <td>Virtual Machine Contributor</td>
    </tr>
    <tr>
      <td>AdminB</td>
      <td>
        <ul>
          <li>Created user assigned managed identity</li>
          <li>Created system assigned managed identity</li>
          <li>Deleted multiple managed identities</li>
        </ul>
      </td>
      <td>Managed Identity Contributor</td>
    </tr>
    <tr>
      <td>AdminC</td>
      <td>
        <ul>
          <li>Reviewed Azure Key Vaults</li>
          <li>Reviewed Azure File Storage</li>
          <li>Reviewed Azure Policy Remediation</li>
          <li>Reviewed permissions on resources</li>
        </ul>
      </td>
      <td>Contributor Role</td>
    </tr>
    <tr>
      <td>AdminD</td>
      <td>
        <ul>
          <li>Assigned roles to resources</li>
          <li>Assigned roles to resource groups</li>
          <li>Removed roles on resources</li>
        </ul>
      </td>
      <td>User Access Administrator</td>
    </tr>
  </tbody>
</table><br>
The information shows that there is a gap between the tasks accessed by AdminC in the last 60 days and their current role assignment.<br><br>
You need to review the tasks that have been completed by AdminC in the last 60 days and assign a new role which is better suited to the tasks. Your solution should adhere to the principle of least privilege.<br><br>
What role should you assign AdminC?
`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "Key Vault Contributor", correct: false },
        { code: "B", content: "User Access Admin", correct: false },
        { code: "C", content: "Reader", correct: true },
        { code: "D", content: "Storage Account Contributor", correct: false },
      ],
      explanation: `AdminC should be assigned the Reader role. Microsoft Entra Permissions Management analytics has highlighted that AdminC only carried out tasks that involved reviewing various services, including Azure Key Vault and Azure Storage. They have not made any changes to resources; therefore, it is a risk to assign them the Contributor role, and the Reader role would be much better suited.<br><br>
AdminC should not be assigned the User Access Admin role. In this scenario, AdminD has this role assigned and they have been assigning roles to resources and resource groups, which means they have been making changes. AdminC has only been reviewing permissions; therefore, this role would not adhere to the principle of least privilege.<br><br>
AdminC should not be assigned the Key Vault Contributor role. This role would allow AdminC to fully manage the Azure Key Vault resources, which would not adhere to the principle of least privilege. Also, this role would not allow AdminC to view any other resource, like Azure Storage.<br><br>
AdminC should not be assigned the Storage Account Contributor role. This role would allow AdminC to fully manage all Azure Storage resources, which would not adhere to the principle of least privilege. Also, this role would not allow AdminC to view any other resource like Azure Key Vault.`,
      category: "Microsoft Entra Permissions Management",
    },
    {
      code: "QX2",
      content: `Your company uses Microsoft Entra to manage identity, and it hosts its infrastructure in Azure including multiple subscriptions.<br><br>
A recent assessment of assigned permissions granted on the Azure subscriptions found that there are multiple administrators that have excessive permissions that they do not use. Your company has decided to use Microsoft Entra Permissions Management to onboard the Azure subscriptions into permissions management to continually assess risk associated with permission creep. AdminA has attempted to onboard all of the Azure Subscriptions into Microsoft Entra Permissions Management Dashboard but receives an error due to not having sufficient permission to complete this task.<br><br>
You need to grant AdminA the relevant permission that allows them to onboard Azure Subscriptions into Microsoft Entra Permissions Management. Your solution should minimize administrative effort.<br><br>
What permission should you assign?`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content:
            "Microsoft.Authorization/roleAssignments/read at the Management Group scope",
          correct: false,
        },
        {
          code: "B",
          content:
            "Microsoft.Authorization/roleAssignments/read at the Subscription scope",
          correct: false,
        },
        {
          code: "C",
          content:
            "Microsoft.Authorization/roleAssignments/write at the Subscription scope",
          correct: false,
        },
        {
          code: "D",
          content:
            "Microsoft.Authorization/roleAssignments/write at the Management Group scope",
          correct: true,
        },
      ],
      explanation: `You should assign AdminA the Microsoft.Authorization/roleAssignments/write permission at the Management Group scope in order to onboard Azure Subscriptions into Microsoft Entra Permission Management. In this scenario, AdminA needs to onboard multiple subscriptions, which involves less administrative effort to assign the permission at the Management level so the permission gets inherited by all subscriptions automatically.<br><br>
You should not assign AdminA the Microsoft.Authorization/roleAssignments/write permission at the Subscription scope. Although the Microsoft.Authorization/roleAssignments/write permission is correct, assigning it at the subscription level would mean increased administrative effort, as you would need to assign this permission to AdminA on each subscription, rather than just once at the Management Group level.<br><br>
You should not assign AdminA the Microsoft.Authorization/roleAssignments/read at the Subscription scope or the Management scope. The Microsoft.Authorization/roleAssignments/read only grants read permissions to role assignments and AdminA requires write permission, and therefore does not meet the scenario requirements.`,
      category: "Microsoft Entra Permissions Management",
    },
    {
      code: "QX3",
      content: `Your company hosts its services in Azure and uses Microsoft Entra to manage its identity and access management.<br><br>
You have implemented Privileged Identity Management (PIM) to require users to give justification for elevating roles. Your manager wants to receive alerts whenever an Azure privilege role assignment is actioned. You create a log analytics workspace and configure alerts to go to your manager, however after a few days your manager reports he has not received any alerts regarding privileged role assignments. Upon further investigation, you find that the Log Analytics workspace does not have access to the relevant table.<br><br>
You need to grant the Log Analytics workspace access to the correct table.<br><br>
Which table should you grant access to?`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "IdentityDirectoryEvents", correct: false },
        { code: "B", content: "AzureActivity", correct: true },
        { code: "C", content: "InsightsMetric", correct: false },
        { code: "D", content: "IdentityInfo", correct: false },
      ],
      explanation: `You should configure the Log Analytics access to the AzureActivity table. The AzureActivity table stores logs that give insight into any subscription-level or management group level events that have occurred in Azure. When an administrator elevates their Azure resource role, this is a change on the subscription level, therefore is captured by this Log Analytics table.<br><br>
You should not configure the Log Analytics access to the IdentityInfo table. The IdentityInfo table is populated by Microsoft Sentinel and stores users identity information. This is normally used to correlate user information and insights with analytics or even hunting queries. It does not store information regarding elevating privileged access.<br><br>
You should not configure the Log Analytics access to the InsightsMetrics table. The InsightsMetric table stores lots of different metrics which over time will converge to InsightsMetrics for Azure Monitor solutions. It does not store information regarding elevating privileged access.<br><br>
You should not configure the Log Analytics access to IdentityDirectoryEvents. The IdentityDirectoryEvents table stores lots of different identity-related events including password changes, password expiration, and UPN changes. It does not store information regarding elevating privileged access.`,
      category: "Microsoft Entra Privileged Identity Management (PIM)",
    },
    {
      code: "QX",
      content: `Your organization uses Microsoft Entra as its identity and access management solution; however, you have resources hosted in both Azure and AWS cloud.<br><br>
There has been an increase in privileged permissions being granted to users without a clear understanding of their access requirements. To mitigate security risks and permission creep, the company purchased Microsoft Entra Permissions Management licenses.<br><br>
The managers of the different departments in the company have requested information regarding permissions as shown below:<br><br>
<table class="table table-bordered">
  <thead>
    <tr><th>Manager Name</th><th>Permissions Information Requirement</th></tr>
  </thead>
  <tbody>
    <tr><td>ManagerA</td><td>Assigned permissions and usage by users</td></tr>
    <tr><td>ManagerB</td><td>Assigned permissions and usage on user activities</td></tr>
    <tr><td>ManagerC</td><td>Assigned permissions and usage by groups</td></tr>
    <tr><td>ManagerD</td><td>Assigned permissions and usage of authorization systems</td></tr>
    <tr><td>ManagerE</td><td>Assigned permissions and usage of serverless functions</td></tr>
    <tr><td>ManagerF</td><td>Assigned permissions and usage of Access Keys</td></tr>
    <tr><td>ManagerG</td><td>Assigned permissions and usage of Reports</td></tr>
  </tbody>
</table><br>
<p>You need to obtain the requested information that is supported by Microsoft Entra Permissions Management.</p>
<p><strong>Which four managers requested information is supported by Microsoft Entra Permissions Management?</strong> Each correct answer presents part of the solution.</p>`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "ManagerC", correct: true },
        { code: "B", content: "ManagerD", correct: false },
        { code: "C", content: "ManagerF", correct: true },
        { code: "D", content: "ManagerE", correct: true },
        { code: "E", content: "ManagerA", correct: true },
        { code: "F", content: "ManagerB", correct: false },
        { code: "G", content: "ManagerG", correct: false },
      ],
      explanation:
        "Microsoft Entra Permissions Management has an analytics dashboard that is used to retrieve analytical information from AWS, Azure or GCP. It supports obtaining permissions related information regarding the following attributes:\n\n- Users: Permissions Management monitors assigned permissions and usage by users\n- Groups: Permissions Management monitors assigned permissions and usage by groups\n- Active Resources: Permissions Management monitors resources that have been used in the last 90 days\n- Active Tasks: Permissions Management monitors tasks that have been done in the last 90 days\n- Access Keys: Permissions Management monitors usage of access keys for specific users\n- Serverless Functions: Permissions Management monitors permissions and usage of serverless functions but only from AWS",
      category: "Microsoft Entra Permissions Management",
    },
    {
      code: "Q60",
      content:
        "Your company uses Microsoft Entra to manage identity and access management for its Microsoft 365 tenant.<br><br>You implement Microsoft Entra Permissions Management in your tenant and you find that there are a number of users and administrators who do not make use of the permissions they have been granted. You recommend using the right-size tool to remediate these issues quickly before they cause a security incident.<br><br>You need to document which four quick actions are performed on users' accounts when using the right-size tool in Microsoft Entra Permissions Management.<br><br>What four actions should you select? Each correct answer presents part of the solution.",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Revoke Delete Tasks", correct: true },
        { code: "B", content: "Revoke Unused Tasks", correct: true },
        { code: "C", content: "Delete Resources", correct: false },
        { code: "D", content: "Apply Access Levels", correct: false },
        { code: "E", content: "Assign Read-Only Status", correct: true },
        { code: "F", content: "Revoke High-Risk Tasks", correct: true },
      ],
      explanation:
        "The right-sizing tool is one of multiple tools that can be used within the Microsoft Entra Permissions dashboard to remediate permissions issues in Azure and other clouds. There are four quick actions that can be performed when using this tool:\n<ul><li>Revoke Unused Tasks</li><li>Revoke High-Risk Tasks</li><li>Revoke Delete Tasks</li><li>Assign Read-Only Status</li></ul>\nWhen using these actions, the Permissions Manager service reviews the user’s historical usage and creates a custom role that includes only the permissions that the user has used within the last 90 days. This custom role is then assigned to the user, and all other permission assignments are removed.\n<br><br>The tool does not allow applying access levels or deleting resources, as these would require more privileged roles like User Administrator.",
      category: "Microsoft Entra Permissions Management",
    },
    {
      code: "Q61",
      content:
        "Your company uses Microsoft Entra to manage its identity and access management for its Microsoft 365 and Azure tenants.<br><br>There has been an increase in security incidents due to privileged roles being incorrectly assigned to administrators. You implement Microsoft Entra Insights. AdminA tries to access the Microsoft Entra Insights tab but receives a permissions error. AdminA currently has the Authentication Administrator role assigned.<br><br>You need to assign AdminA the correct role to allow them to manage the Microsoft Entra Insights tab. Your solution should adhere to the principle of least privilege.<br><br>What role should you assign?",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Privileged Role Administrator", correct: false },
        {
          code: "B",
          content: "Permissions Management Administrator",
          correct: true,
        },
        { code: "C", content: "Global Administrator", correct: false },
        {
          code: "D",
          content: "Privileged Authentication Administrator",
          correct: false,
        },
      ],
      explanation:
        "You should assign the Permissions Management Administrator role to AdminA. The Microsoft Entra Insights tab is part of Microsoft Entra Permissions dashboard. Therefore, to view information on this tab, you need to have the Permissions Management Administrator role assigned. Assigning this role would also adhere to the principle of least privilege, as it does not grant access to other areas of Microsoft Entra.<br><br>You should not assign the Global Administrator role to AdminA. Although the Global Administrator role would allow AdminA to access and manage the Microsoft Entra Insights tab, it is also the most highly privileged role available within Microsoft Entra. The Global Admin role grants access to the entire Administrative side of the Microsoft 365 portal. Therefore, assigning this role would not adhere to the principle of least privilege.<br><br>You should not assign the Privileged Role Administrator role to AdminA. This role would allow the user to manage role assignments within Microsoft Entra ID as well as all areas of Privileged Identity Management. The Microsoft Entra Insights tab is part of Microsoft Entra Permissions Management, which this role does not allow access to.<br><br>You should not assign the Privileged Authentication Administrator role to AdminA. This role allows the user to view, assign, and reset authentication method information for all users, including admins. The Microsoft Entra Insights tab is part of Microsoft Entra Permissions Management, which this role does not allow access to.",
      category: "Microsoft Entra Permissions Management",
    },
    {
      code: "Q62-A",
      content:
        "Your organization hosts its infrastructure in Azure across multiple subscriptions. Your Support Desk Team receive all alerts from Azure services.<br><br>Last month AdminA was tasked with creating an activity alert via Microsoft Permission Management alerts. This activity alert should trigger an email to the Support Desk when any permissions are changed on any of the Azure subscriptions within the tenant.<br><br>Your manager has reported that the alert triggers were not correctly set up and need updating. You log into Microsoft Entra with the AdminB account and elevate your role to Permissions Management Administrator. You attempt to update the existing alert that was created by AdminA; however, the options to edit the alert are all grayed out.<br><br>You need to identify why you are not able to edit the alert triggers on the existing activity alert.<br><br>Statement: AdminA will need to complete the action to edit the alert triggers.",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: true },
        { code: "B", content: "No", correct: false },
      ],
      explanation:
        "AdminA will need to complete the action to edit the alert triggers. Only the user that created the alert can perform actions that include editing the trigger screen, renaming an alert, deactivating an alert, or deleting an alert. In this scenario, AdminB is trying to edit the alert, but because they did not create it, they cannot update it.",
      category: "Microsoft Entra Permissions Management",
    },
    {
      code: "Q62-B",
      content:
        "Your organization hosts its infrastructure in Azure across multiple subscriptions. Your Support Desk Team receive all alerts from Azure services.<br><br>Last month AdminA was tasked with creating an activity alert via Microsoft Permission Management alerts. This activity alert should trigger an email to the Support Desk when any permissions are changed on any of the Azure subscriptions within the tenant.<br><br>Your manager has reported that the alert triggers were not correctly set up and need updating. You log into Microsoft Entra with the AdminB account and elevate your role to Permissions Management Administrator. You attempt to update the existing alert that was created by AdminA; however, the options to edit the alert are all grayed out.<br><br>You need to identify why you are not able to edit the alert triggers on the existing activity alert.<br><br>Statement: AdminB requires Global Admin to edit the alert triggers.",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "AdminB does not require Global Admin to edit the alert triggers. AdminB has already elevated their role to Permissions Management Administrator, which grants sufficient permissions to manage all aspects of Microsoft Entra Permissions Management. Assigning Global Admin would not fix the issue of being unable to edit the alert created by AdminA.",
      category: "Microsoft Entra Permissions Management",
    },
    {
      code: "Q62-C",
      content:
        "Your organization hosts its infrastructure in Azure across multiple subscriptions. Your Support Desk Team receive all alerts from Azure services.<br><br>Last month AdminA was tasked with creating an activity alert via Microsoft Permission Management alerts. This activity alert should trigger an email to the Support Desk when any permissions are changed on any of the Azure subscriptions within the tenant.<br><br>Your manager has reported that the alert triggers were not correctly set up and need updating. You log into Microsoft Entra with the AdminB account and elevate your role to Permissions Management Administrator. You attempt to update the existing alert that was created by AdminA; however, the options to edit the alert are all grayed out.<br><br>You need to identify why you are not able to edit the alert triggers on the existing activity alert.<br><br>Statement: AdminB needs to subscribe to this alert.",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "AdminB does not need to subscribe to this alert. AdminB is part of the Support Desk team who receive alerts and are automatically subscribed. There is a setting named Subscription within the alert for users not subscribed and not receiving alerts, but this does not affect the ability to edit the alert.",
      category: "Microsoft Entra Permissions Management",
    },
  ],
};

export default PlanAndAutomateIdentityGovernance;
