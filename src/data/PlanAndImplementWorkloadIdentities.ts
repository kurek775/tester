import type { Test } from "../models/Test.model";

const PlanAndImplementWorkloadIdentities: Test = {
  code: "PlanAndImplementWorkloadIdentities",
  title: "Plan and implement workload identities",
  questions: [
    {
      code: "Q2",
      content: `<p>You are an IT engineer for an organization that uses Microsoft Entra ID as its Identity &amp; Access Management (IAM) solution.</p>
<p>The Dev team has created an application that is hosted in Azure and that needs to authenticate to a virtual machine (VM) named DevVMA. The Dev team is currently assigned the Virtual Machines Contributor role.</p>
<p>You are tasked with creating a user-assigned managed identity for the Dev Team so they can assign it to DevVMA. When DevUserA assigns the managed identity to DevVMA, they receive a permissions error.</p>
<p>You need to assign DevUserA the relevant role to meet the requirement. Your solution should adhere to the principle of least privilege.</p>
<p><strong>Which role should you assign to DevUserA?</strong></p>`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "Managed Identity Operator", correct: true },
        { code: "B", content: "Contributor", correct: false },
        { code: "C", content: "Managed Identity Contributor", correct: false },
        {
          code: "D",
          content: "Virtual Machine Administrator Login",
          correct: false,
        },
      ],
      explanation:
        "You should assign DevUserA the Managed Identity Operator role. This role will allow DevUserA to read and assign User Assigned Identities to Azure resources, including virtual machines (VMs). The specific action that is required is microsoft.ManagedIdentity/userAssignedIdentities/*/assign/action. This role also meets the requirement of adhering to the principle of least privilege as it grants the minimum amount of access compared to other roles that also give access to assign user assigned identities.\n\nYou should not assign DevUserA the Contributor role. Although this role grants full access to manage all resources within Azure, it does not allow the user to assign managed identities to Azure resources.\n\nYou should not assign DevUserA the Virtual Machine Administrator Login role. This role allows the user to view the virtual machine in the Azure portal and log in as an administrator. It will not give the users the permissions they need to read and assign user identities.\n\nYou should not assign DevUserA the Managed Identity Contributor role. Although this role includes the relevant permission and specific action required in this scenario, it would also grant the user additional permissions that they do not need. Therefore, this role would not adhere to the principle of least privilege.",
      category: "Microsoft Entra / Azure RBAC",
    },
    {
      code: "Q3",
      content: `<p>Your organization uses Microsoft Entra ID as its identity and access management solution.</p>
<p>The Apps team evaluates managed identities in four apps with the following requirements:</p>
<table class="table table-bordered">
  <thead>
    <tr><th>App Name</th><th>Identity Requirement</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>DevAppA</td>
      <td>
        <ul>
          <li>Requires access to AppSV-A (App Service).</li>
          <li>Identity not required long term.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>DevAppB</td>
      <td>
        <ul>
          <li>Requires access to App-VM-A (virtual machine), saapp01 (storage account), and AppSV-B (App Service) resources.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>DevAppC</td>
      <td>
        <ul>
          <li>Identity should stay active long term.</li>
          <li>Requires access to App-VM-B (virtual machines).</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>DevAppD</td>
      <td>
        <ul>
          <li>Requires access to saapp02 (storage account) resource.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
<p>You need to identify which applications require user-assigned managed identities.</p>
<p><strong>Which apps should you identify?</strong></p>`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "AppA, AppB, and AppD", correct: false },
        { code: "B", content: "AppB Only", correct: false },
        { code: "C", content: "AppB and AppC", correct: true },
        { code: "D", content: "All Apps", correct: false },
      ],
      explanation:
        "AppB and AppC require user-assigned identities. AppB needs to access three different resources: a virtual machine (VM), App Service, and Storage account. In this scenario, system identities are being used, which are individually assigned permissions to each respective resource that AppB and AppC access. By using a user-managed identity, both AppB and AppC can use a single identity to gain access permissions to the different resources, resulting in less administrative effort. AppC only needs to access a single resource; however, the App Team needs the identity object to be active after the resource it is assigned to has been deleted. This is another feature that is ideal for user-assigned identities, as system-assigned identities are linked to the resource lifecycle.\n\nAppA and AppD do not require user-assigned identities. AppA only needs access to a single resource and is not required after the testing is completed, so it will be deleted when the resource is deleted. AppD also only requires access to a single identity and so should be used with system-assigned managed identities.",
      category: "Microsoft Entra / Managed Identities",
    },
    {
      code: "Q4",
      content: `<p>Your organization has an existing Azure tenant with multiple subscriptions. You currently manage identity and access management via Microsoft Entra ID within your tenant.</p>
<p>Four new members have recently joined the Dev Admin team. They have been granted the Azure Reader role to all Management Groups within the Azure infrastructure. The current Azure management group and subscription structure is shown in the exhibit.</p>
<p>The Dev Team Leader sends a request to increase the four new members’ permissions with the following access requirements:</p>
<table class="table table-bordered">
  <thead>
    <tr><th>Username</th><th>Access requirements</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>DevAdmin_A</td>
      <td>
        <ul>
          <li>Needs to be able to create resources in DevSubA, DevSubB, DevSubC, and DevSubD</li>
          <li>Requires access to view all resource lists in all subscriptions within the tenant</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>DevAdmin_B</td>
      <td>
        <ul>
          <li>Should be able to create resources in ProdSubA, ProdSubB, and ProdSubD but not ProdSubC</li>
          <li>Requires access to view resource lists in all subscriptions within the tenant</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>DevAdmin_C</td>
      <td>
        <ul>
          <li>Should be able to create resources in ProdSubA, ProdSubB, and ProdSubD but not ProdSubC</li>
          <li>Requires access to view resource lists in all subscriptions within the tenant</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>DevAdmin_D</td>
      <td>
        <ul>
          <li>Requires access to view resource lists in all subscriptions within the tenant</li>
          <li>Needs viewer access to see resource status for all resources</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
<p>You need to determine what changes are required to each user’s account to grant them the required permissions. Your solution should adhere to the principle of least privilege and minimize administrative effort.</p>
<p><strong>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</strong></p>`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content:
            "DevAdmin_A Contributor access should be granted at the Dev-MGMT Management Group scope: Yes",
          correct: true,
        },
        {
          code: "B",
          content:
            "DevAdmin_A Contributor access should be granted at the Dev-MGMT Management Group scope: No",
          correct: false,
        },
        {
          code: "C",
          content:
            "DevAdmin_D does not require any additional access to resources: Yes",
          correct: true,
        },
        {
          code: "D",
          content:
            "DevAdmin_D does not require any additional access to resources: No",
          correct: false,
        },
        {
          code: "E",
          content:
            "DevAdmin_B and DevAdmin_C should be granted Owner access to all subscriptions: Yes",
          correct: false,
        },
        {
          code: "F",
          content:
            "DevAdmin_B and DevAdmin_C should be granted Owner access to all subscriptions: No",
          correct: true,
        },
      ],
      explanation: `<p><strong>DevAdmin_A:</strong> Each user already has the Reader role at all scopes, but DevAdmin_A needs to <strong>create</strong> resources in DevSubA, DevSubB, DevSubC, and DevSubD. Granting the Contributor role at the Dev-MGMT management group scope covers all four development subscriptions in a single assignment, minimizes administrative overhead, and adheres to the principle of least privilege by granting only the Contributor role (not Owner).</p>

<p><strong>DevAdmin_D:</strong> DevAdmin_D only requires the ability to view resource lists and status across all subscriptions. Because they already have the Reader role at the management group level (and thereby at all underlying subscriptions), no additional roles or permissions are needed.</p>

<p><strong>DevAdmin_B and DevAdmin_C:</strong> Both users need to create resources in ProdSubA, ProdSubB, and ProdSubD, but <em>not</em> in ProdSubC, while retaining read access in all subscriptions. Their current Reader role covers the read requirement. To enable resource creation, assign the Contributor role at each of the three appropriate production subscriptions (ProdSubA, ProdSubB, and ProdSubD). Granting Owner access at the subscription or tenant level would exceed what is required and violate least-privilege guidelines, so the statement that they should be granted Owner on all subscriptions is false.</p>`,
      category: "Microsoft Entra / Azure RBAC",
    },
    {
      code: "Q5",
      content: `<p>Your company has a Microsoft Entra tenant.</p>
<p>You want to provide remote users with secure access to your on-premises web application. All remote users are already registered in your Microsoft Entra tenant.</p>
<p>You need to ensure that your solution meets the following requirements:</p>
<ul>
  <li>Support of a single sign-on to Microsoft Entra ID</li>
  <li>No open inbound connections in your on-premises firewall</li>
  <li>No changes to your on-premises web application</li>
</ul>
<p><strong>What should you do?</strong></p>`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "Deploy Azure Traffic Manager.", correct: false },
        {
          code: "B",
          content: "Create an IP Group in Azure Firewall.",
          correct: false,
        },
        {
          code: "C",
          content: "Deploy Microsoft Entra application proxy.",
          correct: true,
        },
        { code: "D", content: "Create an Azure Bastion host.", correct: false },
      ],
      explanation: `<p>You should deploy Microsoft Entra application proxy. Microsoft Entra application proxy allows you to publish your on-premises web application securely to remote users. Application Proxy supports single sign-on experiences through Microsoft Entra. You do not have to open any inbound connections on your on-premises firewall. A lightweight on-premises agent (Application Proxy connector) establishes an outbound connection to the Microsoft Entra Application Proxy service. No changes or updates to your on-premises web application are required, enabling seamless and secure access.</p>

<p>You should not create an Azure Bastion host. Azure Bastion is a managed service for secure RDP/SSH access to Azure VMs via the Azure portal. It cannot be used to publish or secure on-premises web applications.</p>

<p>You should not create an IP Group in Azure Firewall. Azure Firewall’s IP Groups are used to manage sets of IP addresses for firewall rules within Azure VNets, not to provide secure remote access to on-premises applications.</p>

<p>You should not deploy Azure Traffic Manager. Traffic Manager is a DNS-based traffic load balancer that requires your application to be publicly accessible, which conflicts with the requirement to have no open inbound firewall connections.</p>`,
      category: "Microsoft Entra / Application Proxy",
    },
    {
      code: "Q6",
      content: `<p>Your company has a Microsoft Entra tenant.</p>
<p>You want to configure the user consent settings so that end users can grant access to data for trusted apps only, while access is monitored and carefully controlled for risky apps.</p>
<p>You need to determine what consent features are supported in Microsoft Entra ID.</p>
<p><strong>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</strong></p>
<table class="table table-bordered">
  <thead>
    <tr><th>Statement</th><th>Yes</th><th>No</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>By default, user consent is disabled for everyone.</td>
      <td>○</td><td>●</td>
    </tr>
    <tr>
      <td>You can update the user consent settings for risky apps using Microsoft Entra PowerShell.</td>
      <td>●</td><td>○</td>
    </tr>
    <tr>
      <td>You can enable the admin consent workflow to streamline approval processes.</td>
      <td>●</td><td>○</td>
    </tr>
  </tbody>
</table>`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "By default, user consent is disabled for everyone: No",
          correct: true,
        },
        {
          code: "B",
          content:
            "You can update the user consent settings for risky apps using Microsoft Entra PowerShell: Yes",
          correct: true,
        },
        {
          code: "C",
          content:
            "You can enable the admin consent workflow to streamline approval processes: Yes",
          correct: true,
        },
      ],
      explanation: `<p>By default, user consent is <strong>not</strong> disabled for everyone. All users can consent to applications for permissions that do not require explicit administrator consent. You can, however, disable the default user consent permissions so that only users with specific directory roles can consent to new apps.</p>
<p>You can update the user consent settings for risky apps using Microsoft Entra PowerShell. The Microsoft.Graph.PowerShell.Intune module provides cmdlets—such as <code>Set-MgOrganizationSettings</code>—to change the <code>BlockUserConsentForRiskyApps</code> setting, which disables or re-enables end-user consent for risky app requests.</p>
<p>You can enable the admin consent workflow to streamline approval processes. When user consent is disabled in your tenant, you can configure the admin consent workflow so that end users can request administrator approval. Reviewers can then approve or deny these access requests, and users receive notifications when their requests are processed.</p>`,
      category: "Microsoft Entra / User Consent",
    },
    {
      code: "Q7",
      content: `<p>You are an IT technician for an organization that has an existing Microsoft Entra tenant. The organization uses application collections to facilitate users' access to third-party cloud applications and wants to reduce the administrative effort involved in users accessing My Apps, so it decides to implement self-service application access.</p>
<p>Your manager has tasked the user <strong>Project-Eng-1</strong> with enabling and configuring self-service application access. Project-Eng-1 currently has an Intune license.</p>
<p>You need to ensure that Project-Eng-1 has the relevant access and licensing required to enable them to configure self-service application access, whilst following the principle of least privilege.</p>
<p><strong>Which pre-requisite do you need to assign to Project-Eng-1?</strong></p>`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "The Security Administrator role",
          correct: false,
        },
        {
          code: "B",
          content: "The Application Administrator role",
          correct: true,
        },
        {
          code: "C",
          content: "A Microsoft Entra ID P1 license",
          correct: false,
        },
        { code: "D", content: "A Microsoft 365 E3 license", correct: false },
      ],
      explanation: `<p><strong>Assign the Application Administrator role:</strong> Project-Eng-1 needs the Application Administrator role to enable and configure self-service application access. This role permits creating and managing enterprise applications, app registrations, and proxy settings—exactly the tasks required.</p>
<p><strong>Why not the other options?</strong></p>
<ul>
  <li><strong>Security Administrator role:</strong> Grants broad security permissions unrelated to application management and exceeds the least-privilege requirement.</li>
  <li><strong>Microsoft Entra ID P1 license:</strong> Although P1 features support certain conditional-access capabilities for end users, administrators configuring self-service access do not require a P1 license.</li>
  <li><strong>Microsoft 365 E3 license:</strong> Includes Entra ID P1 but is intended for end-user features; it is not needed for the administrative configuration.</li>
</ul>`,
      category: "Microsoft Entra / Application Management",
    },
    {
      code: "Q8",
      content: `<p>You are an IT Engineer for a company that uses Microsoft 365 and Azure services.</p>
<p>You have recently been testing enterprise applications in Microsoft Entra ID with a group of pilot users from the Marketing and HR departments. During the pilot, both department managers reported that they were not able to see which users within their respective teams had access to apps and who did not. They have asked for specific users within the teams to have the permissions to manage user and group assignments at the scope level so they can ensure team members have access to the relevant enterprise apps.</p>
<p>You need to create a custom role and assign the relevant app permissions that meets this request. Your solution should adhere to the principle of least privilege.</p>
<p><strong>What app permissions should you assign?</strong></p>`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content:
            "microsoft.directory/servicePrincipals/appRoleAssignedTo/read",
          correct: false,
        },
        {
          code: "B",
          content:
            "microsoft.directory/servicePrincipals/appRoleAssignedTo/update",
          correct: true,
        },
        {
          code: "C",
          content: "microsoft.directory/servicePrincipals/appRoleAssignedTo/*",
          correct: false,
        },
        {
          code: "D",
          content: "microsoft.directory/groupsAssignableToRoles/create",
          correct: false,
        },
      ],
      explanation: `<p><strong>Assign the update permission:</strong> You should assign the <code>microsoft.directory/servicePrincipals/appRoleAssignedTo/update</code> permission to the custom role you create. This permission grants the user the ability to manage (add or remove) user and group assignments at the scope level for their relevant enterprise applications. It adheres to the principle of least privilege by giving only the necessary write action.</p>
<p><strong>Why not the read permission?</strong> Assigning <code>microsoft.directory/servicePrincipals/appRoleAssignedTo/read</code> would only allow users to view user and group assignments. The requirement is to manage assignments, not just read them, so read-only does not suffice.</p>
<p><strong>Why not the wildcard permission?</strong> Using <code>microsoft.directory/servicePrincipals/appRoleAssignedTo/*</code> is overly broad. The asterisk grants all actions under the <code>appRoleAssignedTo</code> scope, including permissions beyond update, which violates least-privilege principles.</p>
<p><strong>Why not the groupsAssignableToRoles permission?</strong> The <code>microsoft.directory/groupsAssignableToRoles/create</code> permission allows creation of role-assignable groups. This is unrelated to managing app role assignments and is outside the scope of the request.</p>`,
      category: "Microsoft Entra / Custom Roles",
    },
    {
      code: "Q9",
      content: `<p>Your company hosts its infrastructure in Azure and uses Microsoft Entra ID to manage identity and access management.</p>
<p>There have been multiple cyber attacks on the OAuth-enabled applications hosted in your tenant. You enable the app-governance feature in Defender for Cloud Apps to mitigate cyber attacks.</p>
<p>You need to identify which policies should be available once the App Governance feature has successfully integrated with your tenant.</p>
<p><strong>Which three policies should you identify? Each correct answer presents part of the solution.</strong></p>`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Microsoft 365 OAuth Phishing Detection",
          correct: true,
        },
        {
          code: "B",
          content: "Microsoft 365 OAuth app Reputation",
          correct: true,
        },
        {
          code: "C",
          content: "Cloud Discovery Anomaly Detection",
          correct: false,
        },
        { code: "D", content: "Misleading OAuth App Name", correct: false },
        {
          code: "E",
          content: "Microsoft 365 OAuth App Governance",
          correct: true,
        },
      ],
      explanation: `<p>You enable the App Governance feature in the Defender for Cloud Apps portal: <a href="https://portal.cloudappsecurity.com">https://portal.cloudappsecurity.com</a>. Once enabled, it can take some time for information to appear in the dashboard as the service gathers insights from your tenant. After integration, three policies appear in the App Governance section:</p>
<ul>
  <li><strong>Microsoft 365 OAuth app Reputation</strong>: Reviews the reputation of OAuth applications.</li>
  <li><strong>Microsoft 365 OAuth App Governance</strong>: Reviews the governance posture of OAuth applications.</li>
  <li><strong>Microsoft 365 OAuth Phishing Detection</strong>: Reviews OAuth applications for phishing attacks.</li>
</ul>
<p>The <strong>Cloud Discovery Anomaly Detection</strong> policy is a default policy available without App Governance; it looks for anomalies across all cloud applications, not just OAuth apps.</p>
<p>The <strong>Misleading OAuth App Name</strong> policy is also a default, ungoverned policy that flags OAuth app names that are misleading or suspicious.</p>`,
      category: "Microsoft Entra / App Governance",
    },
    {
      code: "Q10",
      content: `<p>Your organization uses Microsoft Entra as an identity and access management solution.</p>
<p>You currently use application collections via the 'My Apps' portal to facilitate user access to corporate cloud apps. Five new users have recently joined the Marketing team and have been assigned the following licenses and group assignments:</p>
<table class="table table-bordered">
  <thead>
    <tr><th>Username</th><th>License</th><th>Group Assignment</th><th>Required Permissions</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>User_001</td><td>Microsoft Entra ID P1</td><td>MK_Managers group</td>
      <td>
        <ul>
          <li>Manage the MK_Camp_Tools collection</li>
          <li>Create new collections</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>User_002</td><td>Microsoft Entra Free</td><td>MK_Users_Owners group</td>
      <td>Manage the MK_Camp_Tools collection</td>
    </tr>
    <tr>
      <td>User_003</td><td>Microsoft Entra ID P1</td><td>MK_Managers group</td>
      <td>
        <ul>
          <li>Manage the MK_Sales_Dash collection</li>
          <li>Create new collections</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>User_004</td><td>Microsoft Entra ID P2</td><td>MK_Users_Owners group</td>
      <td>Manage the MK_Sales_Dash collection</td>
    </tr>
    <tr>
      <td>User_005</td><td>Microsoft Entra Free</td><td>MK_Managers group</td>
      <td>Create new collections</td>
    </tr>
  </tbody>
</table>
<p>The Marketing team has access to the following collections:</p>
<table class="table table-bordered">
  <thead>
    <tr><th>App Collection Name</th><th>Collection Owner</th></tr>
  </thead>
  <tbody>
    <tr><td>MK_Sales_Dash</td><td>MK_Managers group</td></tr>
    <tr><td>MK_Camp_Tools</td><td>MK_Users_Owners group</td></tr>
  </tbody>
</table>
<p>The head of Marketing reports these issues:</p>
<ul>
  <li>User_001 is missing access to manage the MK_Camp_Tools collection.</li>
  <li>User_004 is missing access to manage the MK_Sales_Dash collection.</li>
  <li>User_005 cannot create any new collections.</li>
</ul>
<p>You need to determine what is missing from the three user accounts and fix them. For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>
<table class="table table-bordered">
  <thead>
    <tr><th>Statements</th><th>Yes</th><th>No</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>Assigning User_001 a Microsoft Entra ID P2 license will resolve their issue.</td>
      <td>○</td><td>●</td>
    </tr>
    <tr>
      <td>Adding User_004 to the MK_Managers group will resolve their issue.</td>
      <td>●</td><td>○</td>
    </tr>
    <tr>
      <td>User_005 needs a different license.</td>
      <td>●</td><td>○</td>
    </tr>
  </tbody>
</table>`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content:
            "Assigning User_001 a Microsoft Entra ID P2 license will resolve their issue.",
          correct: false,
        },
        {
          code: "B",
          content:
            "Adding User_004 to the MK_Managers group will resolve their issue.",
          correct: true,
        },
        {
          code: "C",
          content: "User_005 needs a different license.",
          correct: true,
        },
      ],
      explanation: `<p>To work with app collections, you must be an owner of the collection’s owner group, and to create new collections, you must have a Microsoft Entra ID P1 or P2 license.</p>
<p><strong>User_001:</strong> Assigning a P2 license will not resolve the issue. User_001 already has a P1 license and is in the MK_Managers group (owner of MK_Sales_Dash). To manage MK_Camp_Tools, they need membership in the MK_Users_Owners group (the owner group for that collection).</p>
<p><strong>User_004:</strong> Adding User_004 to the MK_Managers group will resolve the issue. They currently belong to MK_Users_Owners, which owns MK_Camp_Tools. To manage MK_Sales_Dash, they must be in MK_Managers (the owner group for that collection).</p>
<p><strong>User_005:</strong> User_005’s Free license prevents creating new collections. Although in the MK_Managers group, they need a P1 or P2 license to create collections.</p>`,
      category: "Microsoft Entra / Application Collections",
    },
    {
      code: "Q11",
      content: `<p>Your company hosts applications in the cloud and uses Microsoft Entra ID to manage permissions and access to these applications.</p>
<p>A new Dev project is starting where members of the Dev team will require permissions to complete different tasks. The Dev team leader has sent you the following details for the requirements:</p>
<table class="table table-bordered">
  <thead>
    <tr>
      <th>Username</th>
      <th>Existing Role Assignment</th>
      <th>Permissions Requirement</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DevAdminA</td>
      <td>Global Reader</td>
      <td>
        <ul>
          <li>Create app registrations</li>
          <li>Create enterprise apps</li>
          <li>Does not need to create app proxy</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>DevAdminB</td>
      <td>Application Administrator</td>
      <td>
        <ul>
          <li>Create and manage app registrations</li>
          <li>Create and manage enterprise applications</li>
          <li>Create and manage app proxy service</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>DevAdminC</td>
      <td>Application Administrator</td>
      <td>
        <ul>
          <li>Create and manage app registrations</li>
          <li>Create and manage enterprise applications</li>
          <li>Create and manage app proxy service</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>DevAdminD</td>
      <td>Cloud App Security Administrator</td>
      <td>Manage application security</td>
    </tr>
  </tbody>
</table>
<p>You advise the Dev team leader that the existing role assignment will suffice for all four users. However, after some testing, they report that DevAdminA cannot complete their required tasks.</p>
<p>You need to evaluate DevAdminA's current role and assign a new one to meet the requirements. Your solution should adhere to the principle of least privilege.</p>
<p><strong>What role should you assign DevAdminA?</strong></p>`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Cloud App Security Administrator",
          correct: false,
        },
        {
          code: "B",
          content: "Cloud Application Administrator",
          correct: true,
        },
        {
          code: "C",
          content: "Application Administrator",
          correct: false,
        },
        {
          code: "D",
          content: "Global Administrator",
          correct: false,
        },
      ],
      explanation: `<p><strong>Assign the Cloud Application Administrator role:</strong> DevAdminA needs to be able to create both enterprise applications and app registrations but does <em>not</em> need to manage app proxy settings. The Cloud Application Administrator role grants exactly those permissions and nothing more, adhering to the principle of least privilege.</p>
<p><strong>Why not Application Administrator?</strong> The Application Administrator role also allows managing app proxy services, which exceeds DevAdminA’s requirements.</p>
<p><strong>Why not Cloud App Security Administrator?</strong> That role is specific to managing app security in Defender for Cloud Apps and does not grant application or registration creation rights.</p>
<p><strong>Why not Global Administrator?</strong> Global Administrator would grant full administrative access across all Microsoft 365 and Azure services, far beyond what DevAdminA needs.</p>`,
      category: "Microsoft Entra / Administrative Roles",
    },
    {
      code: "Q12",
      content: `<p>You work for an organization that uses Microsoft Entra ID with the default user settings in place. A new employee joins the organization and requires permission to register new cloud applications in Microsoft Entra ID.</p>
<p>You need to recommend an appropriate role for the user, following the principle of least privilege.</p>
<p><strong>Which role should you recommend?</strong></p>`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Cloud Application Administrator",
          correct: false,
        },
        { code: "B", content: "Member", correct: true },
        { code: "C", content: "Global Administrator", correct: false },
        { code: "D", content: "Application Administrator", correct: false },
      ],
      explanation: `<p>You should recommend leaving the user as a standard <strong>Member</strong>. By default, Microsoft Entra ID allows all organization members to register new applications. This meets the requirement while adhering to least-privilege principles.</p>
<p><strong>Why not the other roles?</strong></p>
<ul>
  <li><strong>Cloud Application Administrator:</strong> Grants more permissions than the Member role (can manage and create enterprise applications and registrations).</li>
  <li><strong>Application Administrator:</strong> Includes Cloud Application Administrator permissions plus the ability to manage on-premises application proxy settings.</li>
  <li><strong>Global Administrator:</strong> Provides full access to all Microsoft Entra ID and Microsoft 365 services, far exceeding what is needed.</li>
</ul>`,
      category: "Microsoft Entra / Administrative Roles",
    },
    {
      code: "Q13",
      content: `<p>Your company has registered an application with Microsoft Entra ID.</p>
<p>You are asked to test the sign-in experience for this application. When you log in using a test account, you receive a message that you have not been granted access to this application. You discover that there could be several explanations why you have received this error message.</p>
<p><strong>Which three actions could you use to resolve this issue? Each correct answer presents a complete solution.</strong></p>`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content:
            "From the Application's Owners page, add your test account as an owner of the application.",
          correct: false,
        },
        {
          code: "B",
          content:
            "From the Application Properties page, set the Enabled for Users to Sign-in option to Yes.",
          correct: true,
        },
        {
          code: "C",
          content:
            "From the Application Properties page, set the Visible to Users option to Yes.",
          correct: false,
        },
        {
          code: "D",
          content:
            "From the Application Properties page, set the User Assignment Required option to No.",
          correct: true,
        },
        {
          code: "E",
          content:
            "From the application's User and Groups page, add your test account to the list of approved users.",
          correct: true,
        },
      ],
      explanation: `<p><strong>Set User Assignment Required to No:</strong> On the Application Properties page, change “User Assignment Required” to No. If this is Yes and the user isn’t assigned, they can’t sign in. Setting it to No grants access to all users in the tenant.</p>
<p><strong>Alternatively, assign the user directly:</strong> On the application’s “Users and Groups” page, add your test account to approved users. This lets you keep “User Assignment Required” set to Yes while granting specific users or groups access.</p>
<p><strong>Enable sign-in for users:</strong> On the Application Properties page, set “Enabled for Users to Sign-in” to Yes. If this is No, no one can sign in, regardless of assignments.</p>
<p><strong>Why not the other options?</strong> Making the app “Visible to Users” only affects its appearance in My Apps and does not block sign-in. Adding a user as an application owner only grants management rights, not sign-in access.</p>`,
      category: "Microsoft Entra / Enterprise Applications",
    },
    {
      code: "Q14",
      content: `<p>You have a Microsoft 365 tenant.</p>
<p>You have disabled the default ability to create application registrations or consent to applications.</p>
<p>You need to add an entire department as owners to an app. Your solution should adhere to the principle of least privilege.</p>
<p><strong>What should you do?</strong></p>`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "Assign a Microsoft 365 Group.", correct: false },
        { code: "B", content: "Assign users individually.", correct: true },
        {
          code: "C",
          content: "Assign a Security Group the Application Developer role.",
          correct: false,
        },
        {
          code: "D",
          content:
            "Enable the default ability to create application registrations or consent to applications.",
          correct: false,
        },
      ],
      explanation: `<p>You should assign users individually. Only service principals and individual users can be assigned ownership of an App Registration or Enterprise Application.</p>
<p>You should not assign a Microsoft 365 Group, because Microsoft 365 Groups (including security and dynamic groups) are not supported for ownership assignment.</p>
<p>You should not enable the default ability to create application registrations or consent to applications, as this would open registration and consent for the entire organization rather than restricting it as required.</p>
<p>You should not assign a Security Group the Application Developer role, because that would grant all group members permission to manage all app registrations, violating the least-privilege principle.</p>`,
      category: "Microsoft Entra / Enterprise Applications",
    },
    {
      code: "Q16",
      content: `<p>You are an IT technician for an organization that has a Microsoft Entra tenant and hosts applications in the cloud.</p>
<p>A new member of the support team has recently joined the company and your manager has asked you to grant them the following permissions:</p>
<ul>
  <li>Can create App Registrations</li>
  <li>The user should <strong>not</strong> be the app owner</li>
  <li>Can delete single-tenant App Registrations only</li>
</ul>
<p>You need to assign the relevant permissions to the new user to meet these requirements.</p>
<p><strong>Which two permissions should you assign to the new user? Each correct answer presents part of the solution.</strong></p>`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "microsoft.directory/applications/delete",
          correct: false,
        },
        {
          code: "B",
          content: "microsoft.directory/applications/create",
          correct: true,
        },
        {
          code: "C",
          content: "microsoft.directory/applications/createAsOwner",
          correct: false,
        },
        {
          code: "D",
          content: "microsoft.directory/applications.myOrganization/delete",
          correct: true,
        },
        {
          code: "E",
          content: "microsoft.directory/applications/owners/read",
          correct: false,
        },
        {
          code: "F",
          content:
            "microsoft.directory/applications.myOrganization/allProperties/read",
          correct: false,
        },
      ],
      explanation: `<p>You should assign the user the <code>microsoft.directory/applications/create</code> permission so they can create new App Registrations without being made owner of them.</p>
<p>You also need to assign the <code>microsoft.directory/applications.myOrganization/delete</code> permission, which allows deletion of single-tenant applications within your organization. This does not permit deleting multi-tenant apps.</p>
<p>You should <strong>not</strong> assign <code>microsoft.directory/applications/delete</code>, as it allows deleting both single- and multi-tenant apps. You should not assign <code>microsoft.directory/applications/createAsOwner</code> because it makes the user owner of each app they create. The <code>owners/read</code> and <code>myOrganization/allProperties/read</code> permissions grant only read access and do not meet the create or delete requirements.</p>`,
      category: "Microsoft Entra / App Registrations Permissions",
    },
    {
      code: "Q17",
      content: `<p>You are a support engineer for a company that uses application registration with an existing Microsoft Entra tenant.</p>
<p>The Dev team is creating an application to facilitate collaboration with three partner companies. The app will be registered with Microsoft Entra ID. The app registration has the following requirements:</p>
<ul>
  <li>Users in all tenants must be able to use the app</li>
  <li>Users must only be able to access the app from the following partner domains: domainb.com, domaind.com, domaind.com</li>
</ul>
<p>You need to specify who can use the app by configuring the relevant sign-in audience to meet the requirements.</p>
<p><strong>Which sign-in audience should you configure?</strong></p>`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content:
            "Accounts in any organizational directory and personal Microsoft accounts",
          correct: false,
        },
        {
          code: "B",
          content: "Accounts in this organizational directory only",
          correct: false,
        },
        {
          code: "C",
          content: "Accounts in any organizational directory",
          correct: true,
        },
        { code: "D", content: "Personal Microsoft Accounts", correct: false },
      ],
      explanation: `<p>You should configure <strong>Accounts in any organizational directory</strong> as the sign-in audience. This setting allows users from any Microsoft Entra tenant to sign in to the application, satisfying the requirement to support all tenants while excluding personal Microsoft accounts.</p>
<p>Note: Restricting access to specific partner domains (domainb.com, domaind.com, domaind.com) is not controlled by the sign-in audience setting. To enforce domain-level restrictions, you would use Conditional Access policies, guest user invitations, or application-level filtering.</p>`,
      category: "Microsoft Entra / Sign-in Audience",
    },
    {
      code: "Q18",
      content: `<p>You are a Service Desk Engineer for a company that uses Microsoft Entra ID to manage access and identity for its Microsoft 365 tenant.</p>
<p>The Dev team has created a new App Registration that they have tested in the Development environment. One feature of the app requires Microsoft Graph to sign in and read the profile of the signed-in user. During testing, they receive an error that Microsoft Graph does not have the relevant API permissions to access the app registration.</p>
<p>You need to configure the relevant API permission on the app registration to meet the requirements. You should adhere to the principle of least privilege.</p>
<p><strong>What permission should you configure?</strong></p>`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "User.Read", correct: true },
        { code: "B", content: "User.Read.All", correct: false },
        { code: "C", content: "UserAuthenticationMethod.Read", correct: false },
        {
          code: "D",
          content: "UserAuthenticationMethod.ReadWrite",
          correct: false,
        },
      ],
      explanation: `<p>You should configure the <strong>User.Read</strong> delegated permission for Microsoft Graph in the app registration. This permission allows the app to sign in users and read their basic profile (name, email, etc.), meeting the requirement with the least privilege.</p>
<p><strong>Why not the others?</strong></p>
<ul>
  <li><strong>User.Read.All</strong>: Grants read access to all users’ full profiles, exceeding the requirement.</li>
  <li><strong>UserAuthenticationMethod.Read</strong> and <strong>UserAuthenticationMethod.ReadWrite</strong>: Grant access to authentication method data (phone numbers, authenticator settings), which is unrelated to reading the user’s profile and unnecessarily broad.</li>
</ul>`,
      category: "Microsoft Entra / API Permissions",
    },
    {
      code: "Q19",
      content: `<p>You are a Cloud Technician for an organization that has an existing Microsoft 365 tenant and uses Microsoft Defender for Cloud Apps to protect its application workloads that are hosted in the cloud.</p>
<p>The dev team has recently been testing OAuth app policies in the dev tenant and has given you manager a set of requirements to allow you to create the policies within the production tenant. The table below shows the policy requirements:</p>
<table class="table table-bordered">
  <thead>
    <tr><th>Policy Name</th><th>Policy Requirements</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>PolicyA</td>
      <td>
        <ul>
          <li>Needs to scan OAuth apps connected to the environment</li>
          <li>Needs to trigger an alert when it detects a name containing a foreign letter that resembles a Latin letter</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>PolicyB</td>
      <td>
        <ul>
          <li>Needs to scan OAuth apps connected to the environment</li>
          <li>Needs to trigger an alert when an app is used as part of a phishing attack</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>PolicyC</td>
      <td>
        <ul>
          <li>Needs to scan OAuth apps connected to the environment</li>
          <li>Needs to trigger an alert when it detects a publisher name containing a foreign letter that resembles a Latin letter</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
<p>You need to determine which type of out-of-the-box policy meets each of these requirements.</p>
<p><strong>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</strong></p>`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content:
            "You should use the Misleading OAuth app name policy for PolicyA.",
          correct: true,
        },
        {
          code: "B",
          content:
            "You should use the Malicious OAuth App consent policy for PolicyB.",
          correct: true,
        },
        {
          code: "C",
          content:
            "You should use the Misleading OAuth app name policy for PolicyC.",
          correct: false,
        },
      ],
      explanation: `<p><strong>PolicyA:</strong> Use the Misleading OAuth app name out-of-the-box detection policy. It scans all OAuth apps and triggers an alert when an app’s name contains a foreign character resembling a Latin letter—indicating a possible impersonation attempt.</p>
<p><strong>PolicyB:</strong> Use the Malicious OAuth App consent out-of-the-box detection policy. It scans OAuth apps in your environment and triggers alerts on apps identified as malicious or used in phishing attacks, leveraging Microsoft security intelligence.</p>
<p><strong>PolicyC:</strong> Do not use the Misleading OAuth app name policy. PolicyC requires detection based on a publisher name containing foreign characters, which is covered by the Misleading publisher name for an OAuth app policy, not the app name policy.</p>`,
      category: "Microsoft Entra / App Governance",
    },
    {
      code: "Q20",
      content: `<p>You are a support technician for an organization that uses Microsoft Defender for Cloud Apps to help protect resources and applications that are hosted within your Microsoft Cloud tenant.</p>
<p>You have recently introduced the following session control policies:</p>
<ul>
  <li>Monitor file downloads for OneDrive app</li>
  <li>Block file uploads</li>
  <li>Block the download/upload of malware files</li>
</ul>
<p>You are sent a monthly security report which shows you the status of all files that are stored within the infrastructure. The report shows that some files were not scanned or tracked by any of the implemented session control policies. The table below shows an extract of some of the files that were in the report:</p>
<table class="table table-bordered">
  <thead>
    <tr><th>File Name</th><th>File Type</th><th>File Size</th></tr>
  </thead>
  <tbody>
    <tr><td>FileA</td><td>Word File</td><td>25 MB</td></tr>
    <tr><td>FileB</td><td>Excel File</td><td>52 MB</td></tr>
    <tr><td>FileC</td><td>Excel File</td><td>65 MB</td></tr>
    <tr><td>FileD</td><td>PDF File</td><td>45 MB</td></tr>
    <tr><td>FileE</td><td>Word File</td><td>48 MB</td></tr>
    <tr><td>FileF</td><td>Excel File</td><td>61 MB</td></tr>
  </tbody>
</table>
<p>You need to notify your manager of the files that were highlighted as not being scanned or tracked by any session control policies.</p>
<p><strong>Which three files were not scanned or tracked by any session control policies? Each correct answer presents a complete solution.</strong></p>`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "FileA", correct: false },
        { code: "B", content: "FileB", correct: true },
        { code: "C", content: "FileC", correct: true },
        { code: "D", content: "FileD", correct: false },
        { code: "E", content: "FileE", correct: false },
        { code: "F", content: "FileF", correct: true },
      ],
      explanation: `<p><strong>FileB, FileC, and FileF</strong> will be highlighted as not being scanned or tracked by any session control policies. The default session control policies manage files up to 50 MB in size. Any file over 50 MB is excluded unless you update the “Default behavior” settings under Settings &gt; Conditional Access App Control in Microsoft Defender for Cloud Apps.</p>
<p>FileA, FileD, and FileE are all below the 50 MB threshold, so they are handled by the implemented session control policies.</p>`,
      category: "Microsoft Defender for Cloud Apps / Session Controls",
    },
    {
      code: "Q21",
      content: `<p>You are a support engineer for an organization that has an existing Azure subscription and which currently uses Microsoft Entra ID Free licenses for its users.</p>
<p>Your Applications team has recently created a new web app to allow users to manage their time sheets. During the testing phase, it was highlighted that the web app requires more protection. You recommended using a Conditional Access policy to route the app sessions to Defender for Cloud Apps. Upon further investigation, you find that your tenant does not have the relevant license subscriptions to support implementing this solution. You purchase a Microsoft Defender for Cloud Apps license but this does not resolve the issue.</p>
<p>You need to purchase the minimum required licensing plan that allows you to implement this solution.</p>
<p><strong>What licence subscription should you purchase?</strong></p>`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Enterprise Mobility & Security E5",
          correct: false,
        },
        { code: "B", content: "Microsoft Entra ID P2", correct: false },
        { code: "C", content: "Microsoft 365 E3", correct: false },
        { code: "D", content: "Microsoft Entra ID P1", correct: true },
      ],
      explanation: `<p>You should purchase the <strong>Microsoft Entra ID P1</strong> license. To deploy Conditional Access App Control for cloud apps with Microsoft Entra ID, your tenant needs both Microsoft Defender for Cloud Apps and an appropriate Entra ID plan. Since you already have a Defender for Cloud Apps license, adding the Entra ID P1 plan is the minimum requirement and is the most cost-effective option for the capabilities you need.</p>
<p><strong>Why not the other options?</strong></p>
<ul>
  <li><strong>Microsoft 365 E3:</strong> Although it includes Entra ID P1 features, it adds many more capabilities and is significantly more expensive than purchasing Entra ID P1 alone.</li>
  <li><strong>Microsoft Entra ID P2:</strong> Contains all of P1’s features plus additional functionality you do not require, making it less cost-effective for this scenario.</li>
  <li><strong>Enterprise Mobility &amp; Security E5:</strong> Includes both Entra ID P2 and Defender for Cloud Apps features, but you already own Defender for Cloud Apps and do not need the extra services, so this would be unnecessarily costly.</li>
</ul>`,
      category: "Microsoft Entra / Licensing",
    },
    {
      code: "Q22",
      content: `<p>You are a systems administrator for an organization that hosts its services and resources in Microsoft 365 and Azure.</p>
<p>You currently have Microsoft 365 E5 licensing. The Dev team has recently created applications with the following details:</p>
<table class="table table-bordered">
  <thead>
    <tr>
      <th>Application Name</th>
      <th>Application Type</th>
      <th>App Authentication</th>
      <th>Single-Sign On (SSO)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>AppA</td><td>Web App</td><td>SAML 2.0</td><td>Configured</td></tr>
    <tr><td>AppB</td><td>Web App</td><td>SAML 2.0</td><td>Configured</td></tr>
    <tr><td>AppC</td><td>SaaS App</td><td>OpenID 2.0</td><td>Configured</td></tr>
    <tr><td>AppD</td><td>Web App</td><td>OpenID Connect</td><td>Configured</td></tr>
    <tr><td>AppE</td><td>SaaS App</td><td>OpenID 2.0</td><td>Configured</td></tr>
  </tbody>
</table>
<p>You need to identify which applications will support implementing access and session controls in Microsoft Defender for Cloud Apps via Conditional Access policies.</p>
<p><strong>Which three applications will support this request?</strong> Each correct answer presents part of the solution.</p>`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "AppA", correct: true },
        { code: "B", content: "AppB", correct: true },
        { code: "C", content: "AppC", correct: false },
        { code: "D", content: "AppD", correct: true },
        { code: "E", content: "AppE", correct: false },
      ],
      explanation: `<p>To protect apps with Defender for Cloud Apps via Conditional Access App Control, the following requirements must be met:</p>
<ul>
  <li>You need an Entra ID P1 license and a Defender for Cloud Apps license (included in Microsoft 365 E5).</li>
  <li>The application must be configured with Single Sign-On.</li>
  <li>The app must use SAML 2.0 or OpenID Connect if Microsoft Entra is the identity provider.</li>
</ul>
<p><strong>AppA</strong> and <strong>AppB</strong> are Web Apps using SAML 2.0 with SSO configured, and <strong>AppD</strong> is a Web App using OpenID Connect with SSO configured. These three meet all requirements.</p>
<p><strong>AppC</strong> and <strong>AppE</strong> are SaaS Apps using “OpenID 2.0,” which is not OpenID Connect, so they are not supported for Conditional Access App Control.</p>`,
      category:
        "Microsoft Defender for Cloud Apps / Conditional Access App Control",
    },
    {
      code: "Q23",
      content: `<p>Your company hosts applications in Microsoft 365 and uses Microsoft Entra ID as its identity and access management solution.</p>
<p>A recent audit has shown that there are over 2,000 applications installed in the corporate devices that do not align with the existing company policy. As an action from the audit, the support team removed all applications that do not adhere to company policy.</p>
<p>You need to recommend a solution that can mitigate the risk of unauthorized cloud apps being installed within your organization.</p>
<p><strong>What solution should you recommend?</strong></p>`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "Cloud app catalog", correct: true },
        { code: "B", content: "Secure Score", correct: false },
        {
          code: "C",
          content: "Microsoft Defender for Endpoint",
          correct: false,
        },
        { code: "D", content: "Partner catalog", correct: false },
      ],
      explanation: `<p>You should recommend the <strong>Cloud app catalog</strong>. This feature of Microsoft Defender for Cloud Apps discovers and maintains an up-to-date inventory of all cloud applications in use by analyzing traffic logs and comparing them against a known app database. It helps mitigate the risk of unauthorized or non-compliant apps being used within your organization.</p>
<p><strong>Why not the others?</strong></p>
<ul>
  <li><strong>Secure Score</strong> assesses and improves your tenant’s security posture but does not automatically discover or manage unauthorized cloud apps.</li>
  <li><strong>Microsoft Defender for Endpoint</strong> protects and monitors endpoint devices but does not provide visibility into shadow IT cloud applications.</li>
  <li><strong>Partner catalog</strong> manages partner application integrations within Defender for Cloud Apps but does not address unauthorized app discovery.</li>
</ul>`,
      category: "Microsoft Defender for Cloud Apps / Cloud App Catalog",
    },
    {
      code: "Q24",
      content: `<p>Your organization uses Microsoft Defender for Cloud Apps to protect its cloud-hosted applications.</p>
<p>You have recently been testing the Cloud discovery feature of Microsoft Defender for Cloud Apps and want to deploy it into production so that you can continuously analyze cloud app usage.</p>
<p>You are tasked with adding the data sources in the table below to allow automatic log upload with the following requirements:</p>
<table class="table table-bordered">
  <thead>
    <tr><th>Data Source Name</th><th>Encryption Requirement</th><th>Receiver Type</th></tr>
  </thead>
  <tbody>
    <tr><td>DataSourceA</td><td>Yes</td><td>Syslog TCP</td></tr>
    <tr><td>DataSourceB</td><td>Yes</td><td>FTPS</td></tr>
    <tr><td>DataSourceC</td><td>No</td><td>Syslog TCP</td></tr>
    <tr><td>DataSourceD</td><td>Yes</td><td>SSH file transfer</td></tr>
    <tr><td>DataSourceE</td><td>No</td><td>SSH file transfer</td></tr>
    <tr><td>DataSourceF</td><td>No</td><td>SSH file transfer</td></tr>
    <tr><td>DataSourceG</td><td>Yes</td><td>TFTP</td></tr>
  </tbody>
</table>
<p>You try to create DataSourceG; however, you find that the receiver type for TFTP is not supported.</p>
<p><strong>Which three Data Source types can you create? Each correct answer presents part of the solution.</strong></p>`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "DataSourceA", correct: true },
        { code: "B", content: "DataSourceB", correct: true },
        { code: "C", content: "DataSourceC", correct: true },
        { code: "D", content: "DataSourceD", correct: false },
        { code: "E", content: "DataSourceE", correct: false },
        { code: "F", content: "DataSourceF", correct: false },
      ],
      explanation: `<p>You can only create <strong>DataSourceA</strong>, <strong>DataSourceB</strong>, and <strong>DataSourceC</strong>. Microsoft Defender for Cloud Apps supports automatic log upload via the following receiver types: FTP, FTPS, Syslog UDP, Syslog TCP, and Syslog TLS. DataSourceA (Syslog TCP), DataSourceB (FTPS), and DataSourceC (Syslog TCP) match supported types. DataSourceD, DataSourceE, and DataSourceF use SSH file transfer (not supported), and DataSourceG uses TFTP (not supported).</p>`,
      category: "Microsoft Defender for Cloud Apps / Cloud Discovery",
    },
    {
      code: "Q25",
      content: `<p>Your organization hosts applications in the cloud and uses Microsoft Defender for Cloud Apps to give the company visibility over cloud app security.</p>
<p>There has been an increase in app deployments that do not adhere to company policy, which has caused multiple security breaches.</p>
<p>You need to configure a policy in the Microsoft Defender for Cloud Apps portal that will send alerts to the support team when a new app is discovered in your company.</p>
<p><strong>What policy should you configure?</strong></p>`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "Conditional Access", correct: false },
        { code: "B", content: "Shadow IT Policy", correct: true },
        { code: "C", content: "Threat Detection Policy", correct: false },
        { code: "D", content: "Information Protection Policy", correct: false },
      ],
      explanation: `<p>You should configure a <strong>Shadow IT policy</strong>. Shadow IT policies in Defender for Cloud Apps discover unsanctioned cloud applications, assess their risk, and generate alerts when new apps appear in your environment.</p>
<p><strong>Why not the others?</strong></p>
<ul>
  <li><strong>Threat Detection Policy:</strong> Detects suspicious activities or anomalous behaviors but does not focus on discovering new cloud apps.</li>
  <li><strong>Information Protection Policy:</strong> Monitors sensitive data exposure in cloud services (e.g., PII) rather than app discovery.</li>
  <li><strong>Conditional Access:</strong> Controls user access based on conditions (e.g., requiring MFA) and is not used for app inventory or discovery alerts.</li>
</ul>`,
      category: "Microsoft Defender for Cloud Apps / Shadow IT",
    },
    {
      code: "Q26",
      content: `<p>Your company uses Microsoft Entra ID to manage identity and access management to its cloud-hosted resources in Microsoft 365.</p>
<p>There has been a recent security incident where a user has downloaded sensitive information from SharePoint Online onto a personal device, going against the company's security policy. This policy states that users can view company data on personal devices but cannot download company data onto non-corporate devices.</p>
<p>You need to create a Conditional Access policy that mitigates the risk of users downloading data from Office 365 and SharePoint Online onto non-corporate devices in the future.</p>
<p><strong>What policy should you configure?</strong></p>`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Application Enforced Restrictions policy",
          correct: true,
        },
        {
          code: "B",
          content: "Require approved client apps or app protection policy",
          correct: false,
        },
        {
          code: "C",
          content:
            "Block access for unknown or unsupported device platform policy",
          correct: false,
        },
        {
          code: "D",
          content: "Require password change for high-risk users",
          correct: false,
        },
      ],
      explanation: `<p><strong>Configure the Application Enforced Restrictions policy:</strong> This Conditional Access policy supports Office 365, SharePoint Online, and Exchange Online. It sends device information to Microsoft Entra ID and enforces restrictions—such as view-only access—when connections originate from non-compliant or unmanaged devices, preventing downloads on personal devices.</p>
<p><strong>Why not the others?</strong></p>
<ul>
  <li><strong>Require approved client apps or app protection policy:</strong> Limits access to approved apps with Intune app protection but does not enforce download restrictions for SharePoint on non-corporate devices.</li>
  <li><strong>Block access for unknown or unsupported device platform policy:</strong> Would block all access from unsupported devices, preventing even allowed view-only scenarios on personal devices, contrary to policy.</li>
  <li><strong>Require password change for high-risk users:</strong> Triggers a password reset for risky sign-ins and requires Entra ID P2, but does not address download controls.</li>
</ul>`,
      category: "Microsoft Entra / Conditional Access",
    },
    {
      code: "Q27",
      content: `<p>Your company uses Microsoft Defender for Cloud Apps to manage the security posture of its applications.</p>
<p>You are tasked with configuring automated Cloud Discovery with the following details:</p>
<table class="table table-bordered">
  <thead>
    <tr><th>DataSource Name</th><th>Data Source</th><th>Data Encryption Requirement</th></tr>
  </thead>
  <tbody>
    <tr><td>SourceA</td><td>Cisco ASA Firewall</td><td>AES-128</td></tr>
    <tr><td>SourceB</td><td>Defender for Cloud Apps Proxy</td><td>AES-128</td></tr>
    <tr><td>SourceC</td><td>Dell SonicWALL Firewall</td><td>AES-128</td></tr>
  </tbody>
</table>
<p>You configure the Anonymize Private Information feature to ensure private data is encrypted. After a few days, you find that some of the information coming through Microsoft Defender for Cloud Apps is not showing as encrypted in the dashboard or in snapshot reports.</p>
<p>You need to ensure all information from the data sources is encrypted.</p>
<p><strong>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</strong></p>`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content:
            "The Anonymize Private Information feature uses AES-256 encryption.",
          correct: false,
        },
        {
          code: "B",
          content:
            "Information from Defender for Cloud Apps Proxy does not support anonymization capabilities.",
          correct: true,
        },
        {
          code: "C",
          content:
            "Snapshot reports do not support the Anonymize Private Information feature.",
          correct: false,
        },
      ],
      explanation: `<p>The Anonymize Private Information feature uses AES-128 encryption with a dedicated key per tenant; it does not use AES-256.</p>
<p>Data forwarded via the Defender for Cloud Apps Proxy stream is not anonymized because the proxy does not support the Anonymize Private Information feature.</p>
<p>Snapshot reports <strong>do</strong> support anonymization. When you create a snapshot, you can enable the option to anonymize private data in the report.</p>`,
      category: "Microsoft Defender for Cloud Apps / Cloud Discovery",
    },
  ],
};

export default PlanAndImplementWorkloadIdentities;
