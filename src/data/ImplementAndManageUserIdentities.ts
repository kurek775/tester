import type { Test } from "../models/Test.model";

const ImplementAndManageUserIdentities: Test = {
  code: "ImplementAndManageUserIdentities",
  title: "Implement and manage user identities",
  questions: [
    {
      code: "Q1",
      content:
        "<p>Your company integrates an on-premises Active Directory (AD) domain with a Microsoft Entra ID tenant. You configure Microsoft Entra Connect to synchronize all of the user accounts to the cloud.</p><p>You need to enable the hybrid identity functionality, so that end users can be authenticated in the cloud even when on-premises AD infrastructure is not available.</p><p><strong>Solution:</strong> Enable pass-through authentication (PTA).</p><p><strong>Does this solution meet the goal?</strong></p>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "The solution does not meet the goal. With pass-through authentication (PTA), end users can sign in to both on-premises and cloud applications with the same password. However, authentication always occurs on-premises. PTA requires the installation of a lightweight on-premises PTA agent that establishes an outbound connection with Microsoft Entra ID and listens for and responds to password validation requests. With PTA, passwords are never stored in the cloud.",
      category: "Microsoft Entra / Azure AD Hybrid Identity",
    },
    {
      code: "Q2",
      content:
        "<p>Your company integrates an on-premises Active Directory (AD) domain with a Microsoft Entra ID tenant. You configure Microsoft Entra Connect to synchronize all of the user accounts to the cloud.</p><p>You need to enable the hybrid identity functionality, so that end users can be authenticated in the cloud even when on-premises AD infrastructure is not available.</p><p><strong>Solution:</strong> Enable password hash synchronization (PHS).</p><p><strong>Does this solution meet the goal?</strong></p>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: true },
        { code: "B", content: "No", correct: false },
      ],
      explanation:
        "The solution meets the goal. Enabling password hash synchronization (PHS) allows end users to be authenticated in the cloud even when on-premises AD infrastructure is not available. With PHS, you synchronize a hash of the end user’s password from the on-premises AD to Microsoft Entra ID, meaning that when end users sign-in in the cloud, their password hash is compared with the hash record directly in Microsoft Entra ID.",
      category: "Microsoft Entra / Azure AD Hybrid Identity",
    },
    {
      code: "Q3",
      content:
        "<p>Your company integrates an on-premises Active Directory (AD) domain with a Microsoft Entra ID tenant. You configure Microsoft Entra Connect to synchronize all of the user accounts to the cloud.</p><p>You need to enable the hybrid identity functionality, so that end users can be authenticated in the cloud even when on-premises AD infrastructure is not available.</p><p><strong>Solution:</strong> Enable federation with Active Directory Federation Services (AD FS).</p><p><strong>Does this solution meet the goal?</strong></p>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "The solution does not meet the goal. Federation with Active Directory Federation Services (AD FS) enforces authentication against on-premises AD infrastructure. It requires the deployment of an on-premises AD FS farm to integrate with your AD domain controllers and to handle user authentication requests from Microsoft Entra ID.",
      category: "Microsoft Entra / Azure AD Hybrid Identity",
    },
    {
      code: "Q1",
      content:
        "<p>Your company is implementing a Microsoft Entra ID tenant that will synchronize with your on-premises Active Directory Domain Services (AD DS) domain.</p><p>Your organization specifies that your solution must support smartcard authentication.</p><p>You need to recommend a preferred authentication method.</p><p><strong>Solution:</strong> You recommend configuring password hash synchronization.</p><p><strong>Does this solution meet the goal?</strong></p>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "This solution does not meet the goal. Password hash synchronization does not support smartcard authentication. While it is the least complex authentication method to set up and is used when you want the ability to authenticate directly to the cloud, it does not fulfill the requirement for smartcard support. For smartcard authentication, a different method would be necessary. Password hash synchronization is ideal for simpler scenarios where users authenticate using cloud passwords, but it does not provide the functionality needed for smartcard authentication.",
      category: "Microsoft Entra / Azure AD Hybrid Identity",
    },
    {
      code: "Q2",
      content:
        "<p>Your company is implementing a Microsoft Entra ID tenant that will synchronize with your on-premises Active Directory Domain Services (AD&nbsp;DS) domain.</p>\n<p>Your organization specifies that your solution must support smartcard authentication.</p>\n<p>You need to recommend a preferred authentication method.</p>\n<p><strong>Solution:</strong> You recommend configuring pass-through authentication.</p>\n<p><strong>Does this solution meet the goal?</strong></p>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "This solution does not meet the goal. Although Pass-through Authentication (PTA) allows users to authenticate against their on-premises Active Directory, it does not support smartcard authentication. PTA relies on password-based authentication, and since smartcards are certificate-based, PTA cannot enforce or validate smartcard logins. Therefore, this solution would not fulfill the requirement for supporting smartcard authentication while minimizing changes to the on-premises environment.",
      category: "Microsoft Entra / Azure AD Hybrid Identity",
    },
    {
      code: "Q3",
      content:
        "<p>Your company is implementing a Microsoft Entra ID tenant that will synchronize with your on-premises Active Directory Domain Services (AD DS) domain.</p><p>Your organization specifies that your solution must support smartcard authentication.</p><p>You need to recommend a preferred authentication method.</p><p><strong>Solution:</strong> You recommend configuring federated authentication.</p><p><strong>Does this solution meet the goal?</strong></p>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: true },
        { code: "B", content: "No", correct: false },
      ],
      explanation:
        "This solution meets the goal. Federated authentication enables users to authenticate against on-premises Active Directory, which can support smartcard authentication, provided the environment is configured properly. Federated authentication requires setting up additional infrastructure components, such as Active Directory Federation Services (AD FS). Federated authentication is the only solution that fully meets the organization's requirement for smartcard support.",
      category: "Microsoft Entra / Azure AD Hybrid Identity",
    },
    {
      code: "Q4",
      content:
        "<p>You work as a System Administrator for a small company that uses pay-as-you-go licensing in Azure. The company has an Azure subscription called <strong>Subscription1</strong> but you are unable to see it. You can access all admin roles through Azure Privileged Identity Management (PIM).</p><p>You need to gain ownership of Subscription1 using the principle of least privilege.</p><p><strong>Which two actions should you perform? Each correct answer presents part of the solution.</strong></p>",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Elevate to the Application Administrator role.",
          correct: false,
        },
        {
          code: "B",
          content:
            "Enable Access management for Azure resources in Microsoft Entra ID and sign out and in. Then access the Azure portal to take ownership of the subscription.",
          correct: true,
        },
        {
          code: "C",
          content:
            "Assign the Azure DevOps administrator role to your user in Microsoft Entra ID and sign out and in. Then access the Azure portal to take ownership of the subscription.",
          correct: false,
        },
        {
          code: "D",
          content: "Elevate to the Global Administrator role.",
          correct: true,
        },
      ],
      explanation:
        "You should elevate to the Global Administrator role. Only the Global Administrator can elevate their own permissions for Azure subscriptions linked to the tenant. The Global Administrator role is the least privileged role that allows you to take over ownership of linked subscriptions.\n\nYou should also enable Access management for Azure resources and sign out and in. Then access the Azure portal to take ownership of the subscription. This will enable access management for Azure resources, which grants the Global Administrator the User Administrator role on all Azure subscriptions that are linked to the tenant. This role will allow the Global Administrator to take ownership of Subscription1.\n\nYou should not elevate to the Application Administrator role. This role does not have access to Azure subscriptions.\n\nYou should not assign the Azure DevOps administrator role to your user and sign out and in and then access the Azure portal to take ownership of the subscription. This role only affects Azure DevOps and not the subscription that Azure DevOps uses as a billing anchor.",
      category: "Azure Privileged Identity Management",
    },
    {
      code: "Q5",
      content:
        "<p>Your company has a Microsoft Entra tenant that includes resources in multiple regions. You want to use administrative units to delegate Microsoft Entra ID roles to regional administrators so that they can only manage users in the region that they support.</p><p>You need to identify the requirements for implementing administrative units.</p><p>Is this statement correct ?</p><p>Each administrative unit administrator and member must have at minimum a Microsoft Entra ID P1 license.</p>",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "YES",
          correct: false,
        },
        {
          code: "B",
          content: "NO",
          correct: true,
        },
      ],
      explanation:
        "Each administrative unit administrator is required to have at least a Microsoft Entra ID P1 license. Administrative unit members can have any Microsoft Entra license, including a Microsoft Entra ID Free license.\n\nAdministrative member units can include users and groups. You can also make member assignments by Service Principal Name (SPN).\n\nYou cannot manage scoped roles for all Microsoft Entra ID roles through administrative units. Supported roles are limited to:\n• Authentication Administrator\n• Groups Administrator\n• Helpdesk Administrator\n• License Administrator\n• Password Administrator\n• User Administrator\n\nOther Microsoft Entra ID roles cannot be delegated through administrative units.",
      category: "Microsoft Entra / Azure AD Administrative Units",
    },
    {
      code: "Q6",
      content:
        "<p>Your company has a Microsoft Entra tenant that includes resources in multiple regions. You want to use administrative units to delegate Microsoft Entra ID roles to regional administrators so that they can only manage users in the region that they support.</p><p>You need to identify the requirements for implementing administrative units.</p><p>Is this statement correct ?</p><p>Administrative member units can include users and groups.</p>",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "YES",
          correct: true,
        },
        {
          code: "B",
          content: "NO",
          correct: false,
        },
      ],
      explanation:
        "Each administrative unit administrator is required to have at least a Microsoft Entra ID P1 license. Administrative unit members can have any Microsoft Entra license, including a Microsoft Entra ID Free license.\n\nAdministrative member units can include users and groups. You can also make member assignments by Service Principal Name (SPN).\n\nYou cannot manage scoped roles for all Microsoft Entra ID roles through administrative units. Supported roles are limited to:\n• Authentication Administrator\n• Groups Administrator\n• Helpdesk Administrator\n• License Administrator\n• Password Administrator\n• User Administrator\n\nOther Microsoft Entra ID roles cannot be delegated through administrative units.",
      category: "Microsoft Entra / Azure AD Administrative Units",
    },
    {
      code: "Q7",
      content:
        "<p>Your company has a Microsoft Entra tenant that includes resources in multiple regions. You want to use administrative units to delegate Microsoft Entra ID roles to regional administrators so that they can only manage users in the region that they support.</p><p>You need to identify the requirements for implementing administrative units.</p><p>Is this statement correct ?</p><p>You can manage scoped roles for any Microsoft Entra ID role through administrative units.</p>",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "YES",
          correct: false,
        },
        {
          code: "B",
          content: "NO",
          correct: true,
        },
      ],
      explanation:
        "Each administrative unit administrator is required to have at least a Microsoft Entra ID P1 license. Administrative unit members can have any Microsoft Entra license, including a Microsoft Entra ID Free license.\n\nAdministrative member units can include users and groups. You can also make member assignments by Service Principal Name (SPN).\n\nYou cannot manage scoped roles for all Microsoft Entra ID roles through administrative units. Supported roles are limited to:\n• Authentication Administrator\n• Groups Administrator\n• Helpdesk Administrator\n• License Administrator\n• Password Administrator\n• User Administrator\n\nOther Microsoft Entra ID roles cannot be delegated through administrative units.",
      category: "Microsoft Entra / Azure AD Administrative Units",
    },
    {
      code: "Q8",
      content:
        "<p>User1 is a Microsoft Entra ID user and they have been assigned a Microsoft Entra ID P2 license. User1 should be able to create and manage administrative units for your organization.</p><p>Based on the principle of least privilege, you need to assign User1 the necessary rights to manage administrative units.</p><p><strong>Which Microsoft Entra ID built-in role should you add User1 to?</strong></p>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Security Administrator", correct: false },
        { code: "B", content: "Privileged Role Administrator", correct: true },
        { code: "C", content: "Global Administrator", correct: false },
        { code: "D", content: "User Administrator", correct: false },
      ],
      explanation:
        "You should add User1 to the Privileged Role Administrator role. Members of this role can manage Microsoft Entra ID role assignments and all aspects of Privileged Identity Management (PIM) and administrative units. This is the role with the least privilege that can manage administrative units.\n\nYou should not add User1 to the Global Administrator role. Members of this role have full access to all administrative features in Microsoft Entra ID. This would grant far more permissions than needed in this scenario.\n\nYou should not add User1 to the User Administrator role. Members of this role cannot manage administrative units; they can only create and manage users and password policies.\n\nYou should not add User1 to the Security Administrator role. Members of this role cannot manage administrative units; they can only manage security features in the Microsoft 365 security center, Microsoft Entra ID Identity Protection, Microsoft Entra Authentication, Azure Information Protection, and the Office 365 Security & Compliance Center.",
      category: "Microsoft Entra / Azure AD Administrative Units",
    },
    {
      code: "Q9",
      content:
        "<p>You are a global administrator for CompanyA, which has offices all around the world. You added the <strong>companyA.com</strong> domain to your Microsoft Entra tenant, as shown in the exhibit.</p><p>You need to make sure that users in Europe can sign in using the custom domain, <em>europe.companyA.com</em>.</p><p><strong>What should you do first?</strong></p>",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Configure companyA.com as the primary domain.",
          correct: false,
        },
        {
          code: "B",
          content: "Verify the root domain, companyA.com.",
          correct: true,
        },
        {
          code: "C",
          content: "Remove the initial .onmicrosoft.com domain.",
          correct: false,
        },
        {
          code: "D",
          content:
            "Create a europe.companyA.com subdomain in your domain's DNS registrar.",
          correct: false,
        },
      ],
      explanation:
        "Before you can add the subdomain, europe.companyA.com, you should first verify the root domain, companyA.com. Before you can add subdomains, you need to add and verify the root domain. When you add the subdomain, this domain is automatically verified if the root domain was already verified.\n\nYou should not remove the initial .onmicrosoft.com domain. This domain cannot be removed.\n\nYou should not create a subdomain named europe.companyA.com in your domain's DNS registrar. Your subdomain does not need to be a resolvable domain in order to add it to Microsoft Entra ID.\n\nYou should not configure companyA.com as the primary domain. This is not needed to add the subdomain. You can also add subdomains from non-primary domains.",
      category: "Microsoft Entra / Azure AD Custom Domains",
    },
    {
      code: "Q10",
      content:
        "<p>You administer an Azure environment for Company1. Security policies in your company prescribe the following restrictions for new development team members:</p><ul><li>They must not be added as the first owner of newly registered apps.</li><li>They must be able to manage the application proxy settings.</li><li>They must be able to register apps.</li></ul><p>You need to onboard a new development team member and you must implement the principle of least privilege in your solution.</p><p><strong>Which of the following Azure RBAC roles should you assign to the new team member to meet the requirements?</strong></p>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Application Developer", correct: false },
        {
          code: "B",
          content: "Cloud Application Administrator",
          correct: false,
        },
        { code: "C", content: "Application Administrator", correct: true },
        {
          code: "D",
          content: "Cloud App Security Administrator",
          correct: false,
        },
      ],
      explanation:
        "You should assign the Application Administrator Role-Based Access Control (RBAC) role to the new development team member. This is a built-in role that grants the ability to manage applications and application registrations in Microsoft Entra ID. This includes the ability to register and manage applications, as well as manage application proxy settings. This role is typically assigned to users who are responsible for managing the application registration process and ensuring that the correct permissions and settings are in place for applications to function correctly. Additionally, users with the Application Administrator role do not have the ability to manage or manipulate resources such as virtual machines, storage accounts, and virtual networks, which aligns with the principle of least privilege. Although users with this role can view and update the owner of an existing app, they cannot be added as the first owner of an app during its creation.\n\nYou should not assign them the Application Developer role. The Application Developer role is a built-in Microsoft Entra RBAC role that provides permissions specific to the development and management of applications within Microsoft Entra ID. This role allows users to register and manage their own applications, including configuring application settings and permissions. However, it does not grant permissions to manage broader Azure resources such as virtual machines, storage accounts, or virtual networks. Additionally, users with this role are typically not given permissions to manage application proxy settings or other non-application-related Azure resources. Therefore, this role does not meet the requirements for managing application proxy settings or having broader permissions beyond application development.\n\nYou should not assign them the Cloud Application Administrator role. An Azure Cloud Application Administrator is responsible for managing and maintaining applications that are hosted on the Azure cloud platform. This includes tasks such as configuring and deploying applications, monitoring performance, and troubleshooting issues. The role also involves working closely with development teams to ensure that applications are designed and built to work effectively on the Azure platform. Additionally, an Azure Cloud Application Administrator may be responsible for managing Azure resources, such as virtual machines and storage accounts, and for implementing security and compliance measures to protect applications and data. Although users in this role can add, manage, and configure enterprise applications and app registrations, they will not be able to configure or manage application proxy settings, which is one of the requirements in this scenario.\n\nYou should not assign them the Cloud App Security Administrator role. An Azure Cloud App Security Administrator is responsible for managing and maintaining the security of applications that are hosted on the Azure cloud platform. This includes tasks such as implementing security policies and controls, monitoring for security threats, and responding to security incidents. Users who are assigned this role are not able to create and manage Azure apps.",
      category: "Azure RBAC",
    },
    {
      code: "Q11",
      content:
        '<p>You are an IT engineer who works for a company that has an existing Microsoft Entra tenant and also hosts infrastructure in Azure Cloud. You have multiple virtual machines, both Linux and Windows, provisioned in Azure and you decide that you want to control access to the machines using role-based access control (RBAC).</p><p>The following table shows the permissions that have been requested for the support team:</p><table class="table table-bordered">\n  <thead>\n    <tr><th>Username</th><th>Access Requirements</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Helpdesk1</td><td>Requires permissions to log in to an Azure virtual machine but must not be able to install apps</td></tr>\n    <tr><td>Helpdesk2</td><td>Requires permissions to log in to an Azure virtual machine but must not be able to update drivers</td></tr>\n  </tbody>\n</table><p>You need to decide the correct role to assign to Helpdesk1 and Helpdesk2.</p><p><strong>Which role should you assign to these two users?</strong></p>',
      isHtmlContent: true,
      options: [
        { code: "A", content: "Virtual Machine User Login", correct: true },
        { code: "B", content: "User Access Administrator", correct: false },
        { code: "C", content: "Virtual Machine Contributor", correct: false },
        {
          code: "D",
          content: "Virtual Machine Administrator Login",
          correct: false,
        },
      ],
      explanation:
        "You should assign the users the Virtual Machine User Login role. This role will allow the users to view virtual machines in the Azure portal and log in as regular users. It also means that they will not be able to change any settings or admin rights when logged into the operating system (OS).\n\nYou should not assign the Virtual Machine Administrator Login role to either user. This role allows you to view virtual machines in the Azure portal. However, when you log in to the OS, you will have administrator rights rather than standard user rights, and you would therefore be able to perform the actions given in the table.\n\nYou should not assign the Virtual Machine Contributor role to either user. This role allows you to create and manage virtual machines, manage disks, and reset passwords of the root user of the virtual machine using VM extensions. It also allows you to install apps and therefore does not meet the requirements shown in the table.\n\nYou should not assign the User Access Administrator role to either user. This role allows you to manage user access to Azure resources within Microsoft Entra ID. It does not give you any rights to the virtual machine or login access at any level.",
      category: "Azure RBAC",
    },
    {
      code: "Q12",
      content:
        "<p>Your company integrates an on-premises Active Directory domain with a Microsoft Entra tenant. You use Microsoft Entra Connect to synchronize all user accounts to the cloud.</p><p>You want to create a dynamic group in Microsoft Entra ID that contains all user accounts, including business-to-business (B2B) guest accounts.</p><p>You need to construct a membership rule.</p><p><strong>How should you complete the membership rule?</strong></p>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "user.objectId -ne null", correct: true },
        { code: "B", content: "user.objectId -not null", correct: false },
        { code: "C", content: "user.objectId ! null", correct: false },
      ],
      explanation:
        "The complete membership rule should look like this:\n\nuser.objectId -ne null\n\nYou should use the objectId property. The user.objectId returns a globally unique identifier (GUID) for the user object. You can then use a relevant operator to check the GUID against specific values or null.\n\nYou should not use the state or usageLocation user properties. These properties contain geographical location details in the form of a string value for the state property and a two-letter country or region code for the usageLocation property. If not specified, the field value will be set to null. The optional values of the state and usageLocation properties cannot be used as a reliable selection criteria to create a dynamic group with all of your company’s users.\n\nYou should use the -ne operator. By using the -ne operator you can check if the GUID is not equal to null. All tenant members and B2B guest user accounts will have their unique GUID assigned.\n\nYou should not use the -eq or -in operators. The -eq operator checks for equality, not if the GUID is not null. The -in operator checks whether the value is within a given list, enclosed with [] brackets.\n\nYou also should not use the “Member” or “Guest” value options. These are valid value options for the userType user property. For example, you may construct a user.userType -eq “Member” membership rule to select only tenant members and exclude B2B guest accounts.",
      category: "Microsoft Entra / Azure AD Dynamic Groups",
    },
    {
      code: "Q13",
      content:
        "<p>You are the systems administrator for your company. Your company has a Microsoft Entra ID that is configured to synchronize all organizational units (OUs) from your local Active Directory Domain Services (AD DS) using Microsoft Entra Connect. You have purchased Microsoft Exchange Online (Plan 2) for the entire company.</p><p>You need to enable group-based licensing so that all users are assigned the correct license and only have Exchange Online (Plan 2) enabled for the service plan.</p><p><strong>What should you do first?</strong></p>",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content:
            "Configure the options for Exchange Online (Plan 2) on a template user.",
          correct: false,
        },
        {
          code: "B",
          content: "Add the users to an on-premises security group.",
          correct: false,
        },
        {
          code: "C",
          content:
            "Purchase a Microsoft Entra ID P1 license for all user accounts that benefit from group-based licensing.",
          correct: true,
        },
        {
          code: "D",
          content: "Add the users to a cloud-only security group.",
          correct: false,
        },
      ],
      explanation:
        "You should purchase a Microsoft Entra ID P1 license for all user accounts that benefit from the group-based licensing. Microsoft Entra ID P1 or Office 365 E3 or higher is required in order to be eligible to use group-based licensing. Exchange Online Plan 2 does not include Microsoft Entra Premium licensing.\n\nYou should not add users to a cloud-only security group. You must have the correct licensing in place before you can start adding users to a group. This would be the second step.\n\nYou should not add users to an on-premises security group. You must have the correct licensing in place before you can start adding users to a group. This would be the second step. On-premises synced security groups are fully supported for group-based licensing.\n\nYou should not configure the options for Exchange Online (Plan 2) on a template user. There is no option in group-based licensing to capture settings from a template user. The settings would only ever apply to the specific user.",
      category: "Microsoft Entra / Azure AD Group-based licensing",
    },
    {
      code: "Q14",
      content:
        '<p>Your company\'s Microsoft Entra ID includes the following:</p><ul><li>Devices named Device1, Device2, Device3, and Device4</li><li>Users named User1, User2, User3, and User4</li><li>Groups named Group1, Group2, Group3, and Group4</li></ul><p>Group types and group membership are as shown below:</p><table class="table table-bordered">\n  <thead>\n    <tr><th>Name</th><th>Type</th><th>Membership type</th><th>Members</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Group1</td><td>Security</td><td>Assigned user</td><td>User1, User2, User3, Group2</td></tr>\n    <tr><td>Group2</td><td>Security</td><td>Dynamic user</td><td>User2, User3</td></tr>\n    <tr><td>Group3</td><td>Security</td><td>Dynamic device</td><td>Device1, Device2, Device3, Device4</td></tr>\n    <tr><td>Group4</td><td>Microsoft 365</td><td>Dynamic user</td><td>User3, User4</td></tr>\n  </tbody>\n</table><p>You need to organize the license assignments.</p><p><strong>Which groups can you assign a Microsoft Entra ID P1 license to?</strong></p>',
      isHtmlContent: true,
      options: [
        { code: "A", content: "Group1 and Group2 only", correct: false },
        {
          code: "B",
          content: "Group2, Group3, and Group4 only",
          correct: false,
        },
        { code: "C", content: "Group1, Group2 and Group4 only", correct: true },
        { code: "D", content: "Group1 only", correct: false },
        { code: "E", content: "Group2 and Group4 only", correct: false },
      ],
      explanation:
        "You can assign Microsoft Entra ID P1 licenses to Group1, Group2, and Group4 only. You can assign licenses to security groups containing users only or containing users and other groups. You can assign licenses also to Microsoft 365 groups. This includes both assigned and dynamic user groups.\n\nYou cannot assign Microsoft Entra ID P1 licenses to Group3 because it is a device group. You cannot assign licenses to device groups.",
      category: "Microsoft Entra / Azure AD Group-based licensing",
    },
    {
      code: "Q15",
      content:
        "<p>Your company has a Microsoft Entra tenant.</p><p>You discover that two seldom-used user accounts were accidentally deleted.</p><p>You need to restore the deleted user accounts.</p><p><strong>How long are the accounts available to be restored?</strong></p>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Up to 180 days", correct: false },
        { code: "B", content: "Up to 90 days", correct: false },
        { code: "C", content: "Up to 30 days", correct: true },
        { code: "D", content: "Up to 14 days", correct: false },
      ],
      explanation:
        "Deleted user accounts remain available for recovery for up to 30 days. Deleted users are moved to a deleted state when deleted but they are not completely removed. The user accounts are completely removed and permanently deleted after 30 days.\n\nUser accounts remain available for recovery for over 14 days. The accounts do not remain available for 90 or 180 days.",
      category: "Microsoft Entra / Azure AD Identity Recovery",
    },
    {
      code: "Q16",
      content:
        "<p>You create a Microsoft Entra ID security group and configure the group for dynamic membership. You specify the following membership rule:</p><p><code>(user.objectId -ne null) -and (user.userType -eq &quot;Member&quot;)</code></p><p><strong>Which Microsoft Entra ID objects will be added to the group?</strong></p>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Guest users only", correct: false },
        { code: "B", content: "Organization member users only", correct: true },
        { code: "C", content: "All users", correct: false },
        { code: "D", content: "Deleted users only", correct: false },
      ],
      explanation:
        'The specified rule adds organization member users only to the group. Specifying (user.objectId -ne null) returns all users but (user.userType -eq "Member") will filter membership to include organization members only.\n\nThe rule does not return guests only. There are various ways you could specify this, including:\n\n(user.objectId -ne null) -and (user.userType -eq "Guest")\n\nThe rule would not include all users. The simplest rule to include all users is:\n\n(user.objectId -ne null)\n\nThe rule specified does not include deleted users. You cannot filter for deleted users.',
      category: "Microsoft Entra / Azure AD Dynamic Groups",
    },
    {
      code: "Q17",
      content:
        '<p>You are UserA. Your company has a Microsoft 365 tenant.</p><p>You are setting up an access review for TeamB. Team members review their own access. The users\' roles and group membership are shown below:</p><table class="table table-bordered">\n  <thead>\n    <tr><th>Name</th><th>Role</th><th>Group</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>UserA</td><td>Global Admin</td><td>TeamA</td></tr>\n    <tr><td>UserB</td><td>Team Owner</td><td>TeamB</td></tr>\n    <tr><td>UserC</td><td>User Administrator</td><td>TeamA</td></tr>\n    <tr><td>UserD</td><td>User Administrator</td><td>TeamB</td></tr>\n  </tbody>\n</table><p>You need to determine which users need to be assigned a Microsoft Entra ID P2 license.</p><p><strong>Which two users should you assign the license to? Each correct answer presents a complete solution.</strong></p>',
      isHtmlContent: true,
      options: [
        { code: "A", content: "UserD", correct: true },
        { code: "B", content: "UserB", correct: true },
        { code: "C", content: "UserA", correct: false },
        { code: "D", content: "UserC", correct: false },
      ],
      explanation:
        "You should assign a Microsoft Entra ID P2 license to UserB. UserB is the Team Owner for TeamB and will receive access review emails because the Team Owner is a self-reviewer. Anyone conducting a review needs a license.\n\nYou should also assign a Microsoft Entra ID P2 license to UserD. UserD is a member of TeamB and will receive access review emails because UserD is a self-reviewer. Anyone conducting a review needs a license even if they have the User Administrator role.\n\nYou should not assign a Microsoft Entra ID P2 license to UserA. UserA is not a member of TeamB, so UserA will not be targeted for self-review. Global Administrators do not require a license to set up access reviews, configure settings, or apply decisions from the reviews.\n\nYou should not assign a Microsoft Entra ID P2 license to UserC. UserC is not a member of TeamB, so UserC will not be targeted for self-review. User Administrators do not require a license to set up access reviews, configure settings, or apply decisions from the reviews.",
      category: "Microsoft Entra / Access Reviews",
    },
    {
      code: "Q18",
      content:
        "<p>You work for a company that uses Microsoft Entra ID. Your company has offices in Boston and London. Employees in Boston should have a Microsoft Entra ID P1 license, and employees in London should have a Microsoft Entra ID P2 license.</p><p>Your company notices that employees who move between the offices in Boston and London end up with double licenses. To save costs, your company creates the following requirements:</p><ul><li>When an employee moves from Boston to London, the Microsoft Entra ID P1 license must be automatically removed.</li><li>When an employee moves from Boston to London, the Microsoft Entra ID P2 license must be automatically assigned.</li><li>When an employee moves from London to Boston, the Microsoft Entra ID P2 license must be automatically removed.</li><li>When an employee moves from London to Boston, the Microsoft Entra ID P1 license must be automatically assigned.</li></ul><p>You need to recommend a solution in Microsoft Entra ID that meets the requirements. You plan to use groups in Microsoft Entra ID.</p><p><strong>Which two actions should you perform? Each correct answer presents part of the solution.</strong></p>",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Assign the correct license to each user.",
          correct: false,
        },
        {
          code: "B",
          content: "Assign the correct license to each group.",
          correct: true,
        },
        {
          code: "C",
          content:
            "Create a separate group for each office with the assigned membership type.",
          correct: false,
        },
        {
          code: "D",
          content:
            "Create a separate group for each office with the dynamic user membership type.",
          correct: true,
        },
      ],
      explanation:
        "Microsoft Entra ID lets you use groups to manage access to your cloud-based apps, on-premise apps, resources and licenses. There are several group types (security, Microsoft 365), and several group membership types (assigned, dynamic user, and dynamic device). Groups with the membership type dynamic user or dynamic device are referred to as dynamic groups. Groups with assigned membership allow you to select users individually as members of that group. In groups with assigned membership, a user cannot be automatically added to, or removed from a group based on its properties. Dynamic groups allow you to use rules to automatically determine if a user or device should be a member based on their properties. When an attribute changes for a user or device, it is evaluated for all dynamic groups if a user should be added to or removed from a dynamic group. Licenses can be assigned in two ways: to a group, or at the individual user level.\n\nYou should create a separate group for each office with the dynamic user membership type. A rule can be created to determine the membership of a group based on the user’s city property. This will meet the requirements because when the city property changes, the user is automatically assigned to the correct group.\n\nYou should also assign the correct license to each group. The license should be assigned to the group so that when a user is added to the group, the user gets assigned the appropriate license. When a user is removed from a group, the license is automatically removed from the user.\n\nYou should not assign the correct licenses to each user. When a user changes between locations or groups, the license would not change because it’s assigned to the user and not to the group.\n\nYou should not create a separate group for each office with the assigned membership type. In groups with assigned membership, a user cannot be automatically added to, or removed from a group based on its properties. This would add a manual step to change users’ groups and get the correct license.",
      category: "Microsoft Entra / Azure AD Group-based licensing",
    },
    {
      code: "Q19",
      content:
        "<p>You manage user accounts in your organization. You have been tasked with performing a daily bulk operation for all user accounts in the Microsoft Entra tenant.</p><p>You need to identify the most efficient method to accomplish this task.</p><p><strong>What should you do?</strong></p>",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content:
            "Use Microsoft Entra admin portal to handle all accounts in a single request.",
          correct: false,
        },
        {
          code: "B",
          content: "Use PowerShell to handle accounts in smaller batches.",
          correct: true,
        },
        {
          code: "C",
          content:
            "Use Microsoft Entra admin portal to handle accounts in smaller batches.",
          correct: false,
        },
        {
          code: "D",
          content: "Use PowerShell to handle all accounts in a single request.",
          correct: false,
        },
      ],
      explanation:
        "You should use PowerShell to handle accounts in smaller batches. This is the recommended approach based on Microsoft Graph’s throttling limits. Handling operations in smaller batches can help avoid timeouts, reduce the load on the system, and ensure that the operation is completed successfully.\n\nYou should not use PowerShell to handle all accounts in a single request. While PowerShell can manage large tasks, attempting to process all accounts in one request might lead to performance issues or timeouts, especially if the tenant has a large number of users and the request runs for over an hour.\n\nYou should not use the Microsoft Entra admin portal to handle all accounts in a single request. The Microsoft Entra admin portal is not designed for large-scale automation or handling bulk operations efficiently. It is more suited for individual or smaller manual operations.\n\nYou should not use the Microsoft Entra admin portal to manage accounts in smaller batches. The admin portal is not ideal for daily automation or bulk operations, even in smaller batches. PowerShell is the preferred tool for these tasks.",
      category: "Microsoft Entra / Azure AD Administration",
    },
    {
      code: "Q20",
      content:
        "<p>You manage Windows devices in your organization. Users are having issues related to devices failing to complete Microsoft Entra hybrid join.</p><p>You need to identify the cause of the issues preventing devices from completing the Microsoft Entra hybrid join.</p><p><strong>What possible issue should you identify?</strong></p>",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content:
            "Windows devices have discovered service connection point (SCP)",
          correct: false,
        },
        {
          code: "B",
          content: "Windows devices are Active Directory (AD) joined.",
          correct: false,
        },
        {
          code: "C",
          content: "Windows devices have Windows 10 with November 2015 update.",
          correct: false,
        },
        {
          code: "D",
          content:
            "Windows devices have no line of sight to the domain controller.",
          correct: true,
        },
      ],
      explanation:
        "You should identify that the Windows devices not having line of sight to the domain controller is the cause of the issue. If the devices cannot communicate with the domain controller, they will not be able to authenticate, which is a critical step in the Microsoft Entra hybrid join process. This lack of connectivity directly prevents the device from completing the hybrid join to Microsoft Entra.\n\nYou should not identify that the Windows devices having Windows 10 with November 2015 update is the cause of the issue. Windows 10 with the November 2015 update is capable of supporting Microsoft Entra hybrid join. The version itself in this case does not cause issues, provided that all necessary configurations and updates are applied. Thus, simply being on this version should not inherently lead to problems with the join process.\n\nYou should not identify that the Windows devices being Active Directory (AD) joined is the cause of the issue. Being AD joined is a necessary condition for Microsoft Entra hybrid join and is not an issue on its own. This indicates that the device is correctly integrated with the on-premises Active Directory, which is a positive aspect rather than a concern.\n\nYou should not identify that the Windows devices having discovered service connection point (SCP) is the cause of the issue. The discovery of the Service Connection Point (SCP) is part of the expected process for hybrid join. It means that the device has successfully located the Microsoft Entra tenant information. This is a normal and necessary step, not a problem in itself.",
      category: "Microsoft Entra / Azure AD Hybrid Identity",
    },
    {
      code: "Q21",
      content:
        "<p>You work as a systems administrator for Company1. Company1 uses Microsoft 365 E5 for collaboration, including collaboration with external parties through Microsoft Teams.</p><p>You discover that one of Company1’s employees has shared confidential information with Company2, one of your competitors, by adding them as a guest to one of the Teams. You navigate to the external collaboration settings page in the Microsoft Entra ID External Identities blade as shown in the exhibit.</p><p>You need to prevent users in your organization from adding users from Company2 as guests to your organization, while minimizing administrative effort.</p><p><strong>Which option should you select?</strong></p>",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content:
            "Under Guest user access, select Guest user access is restricted to properties and memberships of their own directory objects (most restrictive).",
          correct: false,
        },
        {
          code: "B",
          content:
            "Under Guest invite settings, select No one in the organization can invite guest users including admins (most restrictive).",
          correct: false,
        },
        {
          code: "C",
          content:
            "Under Collaboration restrictions, select Allow invitations only to the specified domains (most restrictive).",
          correct: false,
        },
        {
          code: "D",
          content:
            "Under Collaboration restrictions, select Deny invitations to the specified domains.",
          correct: true,
        },
      ],
      explanation:
        "You should select Deny invitations to the specified domains under Collaboration restrictions. Selecting this option allows you to enter the domain name used by Company2. When configured, Company1’s users can no longer invite Company2’s users to collaborate on documents stored in Company1’s Office 365 environment.\n\nYou should not select Allow invitations only to the specified domains (most restrictive) under Collaboration restrictions. This option will prevent Company1’s users from collaborating with any external user, unless the domain for the external users has been added to the allow list. This configuration will increase the workload for the system administrator as they will have to keep the allow list up to date with allowed domains. It should be used only in very secure environments.\n\nYou should not select No one in the organization can invite guest users including admins (most restrictive) under Guest invite settings. This option will prevent Company1’s users from inviting external users to collaborate with them. This is a secure setting, but it does not meet the goal of only restricting collaboration with Company2’s employees.\n\nYou should not select Guest user access is restricted to properties and memberships of their own directory objects (most restrictive) under Guest user access. This option prevents guest users from seeing information on Company1’s users, such as phone numbers or manager information. This does not meet the goal of the question as this setting will not prevent collaboration with Company2’s employees. It will only restrict the user information that is visible for external users.",
      category: "Microsoft Entra / Azure AD External Collaboration",
    },
    {
      code: "Q22",
      content:
        "<p>You manage a Microsoft Entra tenant for your organization. You want to register external users as Microsoft Entra ID guest accounts by using their existing social accounts.</p><p>You need to determine what sign-in features are supported in Microsoft Entra ID for external identities.</p><p>Select statements which are true</p>",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content:
            "Google guest users can sign in to Microsoft Teams using a common endpoint.",
          correct: true,
        },
        {
          code: "B",
          content:
            "Google guest users can redeem Microsoft Entra ID sign-in invitations.",
          correct: true,
        },
        {
          code: "C",
          content:
            "Facebook guest users can redeem Microsoft Entra ID sign-in invitations.",
          correct: false,
        },
      ],
      explanation:
        "Google guest users can sign in to Microsoft Teams using a common endpoint. Microsoft Teams supports sign-in for Google guest accounts from a common endpoint, such as https://teams.microsoft.com, without the need to specify your tenant information.\n\nGoogle guest users can redeem Microsoft Entra ID sign-in invitations. Configuring Google federation in Microsoft Entra ID allows external users to be invited and redeem their invitations to sign in to shared apps and resources with their existing Gmail accounts.\n\nFacebook guest users cannot redeem Microsoft Entra ID sign-in invitations. Facebook federation allows external users to sign in with their existing Facebook accounts. However, they cannot be invited and redeem their invitations. External users can sign up with their Facebook accounts only using self-service registration and user flows.",
      category: "Microsoft Entra / Azure AD External Identities",
    },
    {
      code: "Q23",
      content:
        "<p>You are a Global Administrator for the Microsoft 365 tenant for your company. You want to add your company's custom domain, <strong>companya.com</strong>, to Microsoft Entra ID.</p><p>You need to add DNS records to the domain registrar entry to verify the domain.</p><p><strong>Which two DNS record types could you add? Each correct answer presents a complete solution.</strong></p>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "AAAA", correct: false },
        { code: "B", content: "MX", correct: true },
        { code: "C", content: "CNAME", correct: false },
        { code: "D", content: "TXT", correct: true },
      ],
      explanation:
        "You should add either MX or TXT. These are the only two DNS record types that are supported for custom domain verification in Microsoft Entra ID. You only need to add one record (either an MX or a TXT record) to verify your custom domain.\n\nYou should not add a CNAME record. A CNAME record is used to map a canonical name to another DNS name (alias), and cannot be used for domain verification in Microsoft Entra ID.\n\nYou should not add an AAAA record. An AAAA record maps a hostname to an IPv6 address and is not supported for domain verification in Microsoft Entra ID.",
      category: "Microsoft Entra / Azure AD Custom Domains",
    },
    {
      code: "Q24",
      content:
        "<p>Your company has a Microsoft Entra tenant named company1.onmicrosoft.com. You enable business-to-business (B2B) collaboration with default invitation settings. You plan to use bulk invite to invite a large number of users from a partner organization. You create a .csv file with user information and invitation preferences that you will upload to Microsoft Entra ID.</p><p>You need to determine the parameters that must be included in the .csv file.</p><p><strong>Which two column headings should you include? Each correct answer presents part of the solution.</strong></p>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Redirection URL", correct: true },
        { code: "B", content: "Source domain", correct: false },
        { code: "C", content: "Password", correct: false },
        { code: "D", content: "Email address", correct: true },
        { code: "E", content: "Username", correct: false },
      ],
      explanation:
        "You should include the redirection URL and email address column headings for each external user in the .csv file. Users are redirected to the redirection URL after accepting the invitation. The email address is the address at which the user will receive the invitation. After creating the .csv file, you would upload it to Microsoft Entra ID and verify that the users are added to Microsoft Entra ID. You can then send a bulk invite.\n\nYou should not include a username. The users for external access are created as guest users.\n\nLikewise, you should not specify a password for the guest user.\n\nYou should not include a source domain. B2B collaboration guests are not necessarily a member of an external domain.",
      category: "Microsoft Entra / Azure AD External Identities",
    },
    {
      code: "Q25",
      content:
        "<p>Your company has a Microsoft Entra ID domain named <strong>company1.com</strong>. You enable business-to-business (B2B) collaboration with default invitation and external collaboration settings.</p><p>You need to determine the guest user access which is allowed by this configuration.</p><p>Select statements which are true</p>",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Guest users can access their own profiles.",
          correct: true,
        },
        {
          code: "B",
          content:
            "Guest users can see the membership of all non-hidden groups.",
          correct: true,
        },
        {
          code: "C",
          content: "Guest users can enumerate users and groups.",
          correct: false,
        },
      ],
      explanation:
        "Guest users can access their own profiles and see the membership of all non-hidden groups; however, they cannot enumerate users and groups. When you configure default external collaboration settings, external collaboration is configured as:\n\nGuest users have limited access to properties and memberships of directory objects. Under this setting, users can access their own profiles and see the membership of all non-hidden groups. Guest users cannot enumerate users and groups.\n\nIf you want to give guest users greater access to Microsoft Entra ID, you would need to set the collaboration to:\n\nGuest users have the same access as members (most inclusive). With this setting, guest users would have the same access to Microsoft Entra ID as Microsoft Entra ID members.\n\nThe most restrictive collaboration setting is:\n\nGuest user access is restricted to properties and memberships of their own directory objects (most restrictive). With this setting, guest users would be limited to accessing only their own profiles.",
      category: "Microsoft Entra / Azure AD External Collaboration",
    },
    {
      code: "Q26",
      content:
        "<p>You are a Microsoft 365 administrator at your company. Your company allows external collaboration with other companies using Microsoft Entra ID.</p><p>User1 and User2 are both members of the IT department. User1 has the Authentication Administrator role assigned. User2 has the Guest Inviter Administrator role assigned.</p><p>The settings for external collaboration are configured as shown in exhibits.</p><p>Select statements which are true</p>",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content:
            "User1 is able to invite alice@CompanyB.com as a new guest user.",
          correct: false,
        },
        {
          code: "B",
          content:
            "User2 is able to invite peter@CompanyB.com as a new guest user.",
          correct: true,
        },
        {
          code: "C",
          content:
            "User1 is able to invite alice@CompanyD.com as a new guest user.",
          correct: false,
        },
        {
          code: "D",
          content:
            "User2 is able to invite peter@CompanyD.com as a new guest user.",
          correct: false,
        },
      ],
      explanation:
        "User1 is not able to invite alice@CompanyB.com as a new guest user. Although the CompanyB.com domain is allowed in the target domains section, User1 is not allowed to invite new guests. Only users that have the Global Administrator, User Administrator, or Guest Inviter role can invite guests, due to the current configuration.\n\nUser2 is able to invite peter@CompanyB.com as a new guest user. This is because they have been assigned the Guest Inviter Administrator role.\n\nUser1 cannot invite alice@CompanyD.com as a new guest user, because the domain CompanyD.com is not listed in the target domains section. Only guest users from the listed domains can be added to the tenant. Also, User1 has been assigned the Authentication Administrator role and, due to the current configuration, only users with the Global Administrator, User Administrator, or Guest Inviter role can invite guests.\n\nAlthough User2 has the Guest Inviter Administrator role assigned, User2 cannot invite peter@CompanyD.com as a new guest user because the domain CompanyD.com is not listed in the target domains section. Only guest users from those domains can be added to the tenant.",
      category: "Microsoft Entra / Azure AD External Collaboration",
    },
    {
      code: "Q27",
      content:
        "<p>You are an Identity Administrator at CompanyA.</p><p>Your organization is migrating most of its on-premises infrastructure and services to Azure. Some resources, including Active Directory (AD), will remain on-premises because of compliance requirements. When users authenticate to organizational cloud services they will have to use their on-premises user login.</p><p>You need to implement a solution that requires minimal maintenance and does not require additional infrastructure to reduce costs.</p><p><strong>Which authentication method should you implement?</strong></p>",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Pass-through Authentication (PTA)",
          correct: false,
        },
        {
          code: "B",
          content: "Password Hash Synchronization (PHS)",
          correct: true,
        },
        {
          code: "C",
          content: "Single Sign-On (SSO)",
          correct: false,
        },
        {
          code: "D",
          content: "Federation Services (FS)",
          correct: false,
        },
      ],
      explanation:
        "You should implement Password Hash Synchronization (PHS) because it is easy to implement and requires the least additional infrastructure and maintenance. PHS synchronizes a hash of the on-premises password into Microsoft Entra ID, allowing cloud authentication even if the on-premises AD remains in place.\n\nYou should not implement Pass-through Authentication (PTA) because it requires deploying and maintaining on-premises agents to authenticate passwords through to AD, adding infrastructure overhead.\n\nYou should not implement Federation Services (FS) because federated authentication relies on an externally hosted AD FS farm or third-party identity provider, which adds significant infrastructure and maintenance costs.\n\nYou should not implement Single Sign-On (SSO) by itself. SSO requires a backing authentication method (such as PHS or PTA) and cannot function without synchronizing or passing through credentials.",
      category: "Microsoft Entra / Azure AD Hybrid Identity",
    },
    {
      code: "Q28",
      content:
        "<p>You are an Administrator for a company named CompanyA.</p><p>CompanyA has two divisions. Each division has its own IT staff who manage identity and access within the division. The IT staff from Division A must not be able to manage users and groups from Division B, and the IT staff from Division B must not be able to manage users and groups from Division A.</p><p>You need to limit IT staff user management access. What should you create?</p>",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Two security groups",
          correct: false,
        },
        {
          code: "B",
          content: "Two mail-enabled security groups",
          correct: false,
        },
        {
          code: "C",
          content: "Two Microsoft 365 groups",
          correct: false,
        },
        {
          code: "D",
          content: "Two administrative units",
          correct: true,
        },
      ],
      explanation:
        "You should create two administrative units. You can use an administrative unit as a container for users and groups, enabling you to isolate users and groups who are to be managed as a subset of the organization. You can assign admin roles, such as the Helpdesk Administrator, scoped to each administrative unit so that IT staff in Division A manage only Division A objects and IT staff in Division B manage only Division B objects.\n\nYou should not create two security groups. Security groups are used for managing access to resources such as enterprise apps and Azure resources, not for scoping administrative permissions.\n\nYou should not create two mail-enabled security groups. Mail-enabled security groups function like security groups for access control and also serve as distribution lists; they do not provide scoped administrative boundaries.\n\nYou should not create two Microsoft 365 groups. Microsoft 365 groups manage membership and collaboration resources (mail, SharePoint) but do not scope administrative roles. You cannot use them to prevent one IT team from managing another division’s directory objects.",
      category: "Microsoft Entra / Azure AD Administrative Units",
    },
    {
      code: "Q29",
      content:
        "<p>Company1 is planning on moving some of its services to Microsoft 365. This includes using Exchange Online in a hybrid environment. You are involved in designing the identity solution for this new setup.</p><p>You need to recommend a single sign-on (SSO) solution that minimizes both the administrative effort and the reliance on the on-premises infrastructure.</p><p><strong>What solution should you recommend?</strong></p>",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content:
            "Synchronized identities with Password Hash Synchronization (PHS)",
          correct: true,
        },
        {
          code: "B",
          content:
            "Federated identities with Active Directory Federation Services (AD FS)",
          correct: false,
        },
        {
          code: "C",
          content: "Cloud-only identities",
          correct: false,
        },
        {
          code: "D",
          content:
            "Federated identities with Pass-through Authentication (PTA)",
          correct: false,
        },
      ],
      explanation:
        "You should choose synchronized identities with Password Hash Synchronization (PHS). This option provides single sign-on and has minimal reliance on the on-premises infrastructure as the actual verification of the password takes place in Microsoft Entra ID, based on the synced hash of the password, not on Active Directory Domain Services (AD DS).\n\nYou should not choose cloud-only identities. These identities cannot be used in combination with an Exchange Online Hybrid setup.\n\nYou should not choose federated identities with Active Directory Federation Services (AD FS). Although this setup meets the Exchange Online Hybrid requirements and provides the option for single sign-on (SSO), you will need to set up and maintain multiple extra servers in your on-premises environment to support this configuration. For a basic setup of AD FS, you would need at least two servers: the AD FS server itself, and a Web Application Proxy server. To make the setup highly available, you would need two servers for each role and a load balancing solution.\n\nYou should not recommend federated identities with Pass-through Authentication (PTA). You are using an Exchange Online Hybrid setup, so you need federated identities. You can provide SSO for federated identities using PTA with the least administrative effort because PTA only requires the installation of a simple agent on one or more existing servers in your on-premises infrastructure. This option, however, has a reliance on the on-premises infrastructure as the authentication relies on AD DS.",
      category: "Microsoft Entra / Azure AD Hybrid Identity",
    },
    {
      code: "Q30",
      content:
        "<p>You have a Microsoft Entra tenant named <strong>company1.onmicrosoft.com</strong>.</p><p>You purchase the domain name, <strong>company1.com</strong>, from an external Domain Name System (DNS) registrar and add it to your Microsoft Entra tenant as an unverified custom domain.</p><p>You need to verify the ownership of your domain name.</p><p><strong>Which two DNS records should you use? Each correct answer presents a complete solution.</strong></p>",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "MX record",
          correct: true,
        },
        {
          code: "B",
          content: "CNAME record",
          correct: false,
        },
        {
          code: "C",
          content: "A record",
          correct: false,
        },
        {
          code: "D",
          content: "TXT record",
          correct: true,
        },
      ],
      explanation:
        "You should use either a TXT or an MX record to verify your ownership. A TXT record is used to store text values, while an MX record points to a mail server. Creating one of them with your DNS registrar and entering the Microsoft Entra ID–generated values will verify the ownership of your custom domain. After you add the record, click Verify in the Microsoft Entra admin portal; once verification succeeds, the domain state changes from Unverified to Available. You may then delete the TXT or MX record if desired.\n\nYou should not use an A record to verify the ownership of your custom domain. An A record maps a DNS name to an IPv4 address and is not supported for custom domain verification in Microsoft Entra ID.\n\nYou should not use a CNAME record to verify the ownership of your custom domain. A CNAME record maps one DNS name to another and cannot be used for domain verification in Microsoft Entra ID.",
      category: "Microsoft Entra / Azure AD Custom Domains",
    },
    {
      code: "Q31",
      content:
        "<p>Your company is using Microsoft Entra Connect to synchronize objects from on-premises Active Directory (AD) to Microsoft Entra ID. The current authentication method is federated authentication and uses Active Directory Federation Services (AD FS).</p><p>Two weeks ago, there was a long-lasting outage in your company’s datacenter which affected the availability of AD FS, meaning that users could no longer authenticate to Microsoft 365 services. Now that the outage has been resolved, IT management needs to prevent this from happening again in the future.</p><p>You need to design a solution to ensure that access to Microsoft 365 services is still possible, even when on-premises servers are not available for a while.</p><p><strong>What should you do?</strong></p>",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Enable password writeback in Microsoft Entra Connect.",
          correct: false,
        },
        {
          code: "B",
          content: "Configure Microsoft Entra ID Protection.",
          correct: false,
        },
        {
          code: "C",
          content:
            "Switch the authentication method to pass-through authentication (PTA).",
          correct: false,
        },
        {
          code: "D",
          content:
            "Switch the authentication method to password hash synchronization (PHS).",
          correct: true,
        },
      ],
      explanation:
        "You should switch the authentication method to password hash synchronization (PHS). PHS provides highly available cloud authentication and does not rely on on-premises servers. With PHS as your primary authentication method, authentication takes place in Microsoft Entra ID, and users can use the same password as in AD to authenticate. This is possible because the password hash is synchronized from AD to Microsoft Entra ID using Microsoft Entra Connect.\n\nYou should not switch the authentication method to pass-through authentication (PTA). PTA relies on agents installed on your on-premises servers. If your datacenter suffers another outage, authentication to Microsoft 365 services would no longer be possible.\n\nYou should not configure Microsoft Entra ID Protection. Microsoft Entra ID Protection detects risky users and risky sign-ins; it has no impact on your authentication method availability.\n\nYou should not enable password writeback in Microsoft Entra Connect. Password writeback is a feature of self-service password reset and synchronizes user password changes back to on-premises AD. It does not affect the high availability of the authentication process.",
      category: "Microsoft Entra / Azure AD Hybrid Identity",
    },
    {
      code: "Q32",
      content:
        "<p>You manage a hybrid Microsoft Entra ID environment for your organization. You have implemented the following services:</p><ul><li>Active Directory Domain Services (AD DS)</li><li>Microsoft Entra Connect</li><li>Active Directory Federation Services (AD FS)</li></ul><p>You need to monitor the environments.</p><p><strong>Which environment or environments can you monitor using the Microsoft Entra Connect Health agent?</strong></p>",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "AD DS and AD FS only",
          correct: false,
        },
        {
          code: "B",
          content: "Microsoft Entra Connect and AD DS only",
          correct: false,
        },
        {
          code: "C",
          content: "AD FS only",
          correct: false,
        },
        {
          code: "D",
          content: "AD DS only",
          correct: false,
        },
        {
          code: "E",
          content: "Microsoft Entra Connect, AD DS, and AD FS",
          correct: true,
        },
      ],
      explanation:
        "Microsoft Entra Connect Health Agent can monitor Microsoft Entra Connect, Active Directory Domain Services (AD DS), and Active Directory Federation Services (AD FS). Microsoft Entra Connect Health is a feature in Microsoft Entra ID that allows you to monitor and gain insight into the on-premises identity infrastructure used in your organization's hybrid identity implementation. Microsoft Entra Connect Health Agent is used to monitor the health and performance of the different components of your hybrid identity infrastructure, such as AD DS, AD FS, Microsoft Entra ID, and Directory Synchronization. The agent collects data from these components and sends it to Microsoft Entra Connect Health for analysis and reporting.\n\nSome of the key performance indicators (KPI) you can monitor using the agent include:\n• Synchronization status and errors\n• Connectivity and latency between on-premises and Microsoft Entra ID\n• Authentication and password hash synchronization performance\n• Domain controller performance and replication status\n• Configuration and service health of Microsoft Entra Connect\n• Security and compliance reporting (e.g. with regard to regulatory requirements)\n• Detailed reports and alerts on any issues that are detected\n\nAlthough Microsoft Entra Connect Health Agent can monitor AD DS, it is not the only environment that Microsoft Entra Connect Health Agent can monitor.\n\nAlthough Microsoft Entra Connect Health Agent can monitor AD FS, it is not the only environment that Microsoft Entra Connect Health Agent can monitor.\n\nAlthough Microsoft Entra Connect Health Agent can monitor AD DS and AD FS, these are not the only environments that Microsoft Entra Connect Health Agent can monitor.\n\nAlthough Microsoft Entra Connect Health Agent can monitor Microsoft Entra Connect and AD DS, these are not the only environments that Microsoft Entra Connect Health Agent can monitor.",
      category: "Microsoft Entra / Azure AD Monitoring",
    },
    {
      code: "Q33",
      content:
        "<p>You are managing an Azure hybrid cloud environment. Your on-premises Active Directory domain is synchronized to a Microsoft Entra tenant using Microsoft Entra Connect.</p><p>All your Azure hybrid administrators are working remotely.</p><p>You need to make sure that the administrators authenticate to the on-premises Active Directory domain controller before they are able to access Azure resources.</p><p><strong>What change should you make to your Microsoft Entra Connect configuration? Your solution should use the least amount of administrative effort.</strong></p>",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Enable Pass-through Authentication",
          correct: true,
        },
        {
          code: "B",
          content: "Enable Seamless single sign-on",
          correct: false,
        },
        {
          code: "C",
          content: "Enable Federation",
          correct: false,
        },
        {
          code: "D",
          content: "Enable Email as alternate login ID",
          correct: false,
        },
      ],
      explanation:
        "<p>You should enable <strong>Pass-through Authentication (PTA)</strong> in your Microsoft Entra Connect configuration. Microsoft Entra Connect PTA is a feature of Microsoft Entra Connect that allows organizations to authenticate users directly against on-premises Active Directory Domain Services (AD DS), using a lightweight agent that is installed on one or more servers in the organization’s network. This allows users to use their on-premises AD credentials to authenticate to Microsoft Entra ID and access cloud-based services and resources such as Azure Infrastructure-as-a-Service or Office 365, without the need to deploy and manage an additional set of on-premises infrastructure. PTA works by proxying authentication requests from Microsoft Entra ID to the on-premises AD DS and returning the results back to Microsoft Entra ID, thus providing a seamless experience for the users.</p><p>You should not enable <strong>Federation</strong> in your Microsoft Entra Connect configuration. Microsoft Entra Connect federation is a feature of Microsoft Entra Connect that allows organizations to authenticate users against on-premises AD DS using the Active Directory Federation Services (AD FS) protocol. With AD FS, organizations can set up a trust relationship between their on-premises AD DS and Microsoft Entra ID, allowing users to authenticate to Microsoft Entra ID using their on-premises AD credentials. When an organization sets up Microsoft Entra Connect federation, it installs the AD FS role on one or more servers in the organization’s network. These servers act as the organization’s identity provider, authenticating users against the on-premises AD DS and issuing security tokens that can be used to access Microsoft Entra ID and other federated services. Microsoft Entra Connect federation is more complex than PTA and might be more suitable for larger organizations with more advanced security requirements, but also require more maintenance and management. As such this solution does not meet the least-amount-of-administrative-efforts requirement.</p><p> You should not enable <strong>seamless single sign-on (Seamless SSO)</strong> in your Microsoft Entra Connect configuration. Microsoft Entra Connect Seamless SSO is a feature of Microsoft Entra Connect that allows users to be authenticated to Microsoft Entra ID without having to re-enter their credentials, if they are using their corporate devices connected to the corporate network. This option is complementary to PTA or Password Hash Sync. In this scenario administrators are working remotely and are not connected to the corporate network, and as such this solution does not meet the requirements.</p> <p>You should not enable <strong>Email as alternate login ID</strong> in your Microsoft Entra Connect configuration. One of the features of Microsoft Entra Connect is the ability to use an alternate login ID, which allows users to sign in to their accounts using an email address instead of their traditional Active Directory user name. The Alternate Login ID feature maps the user’s email address to their on-premises Active Directory user name, so that when the user attempts to sign in to Microsoft Entra ID using their email address, the system is able to locate and authenticate their account using their Active Directory user name. This feature can be useful for organizations that use email addresses as their primary means of identifying users and it can help to simplify the login process for users, but it has no influence against what identity provider (Microsoft Entra ID or on-premises Active Directory) the user authenticates.</p>",
      category: "Microsoft Entra / Azure AD Hybrid Identity",
    },
    {
      code: "Q1",
      content: `Your hybrid identity environment with Microsoft Entra ID currently uses Active Directory Federation Services (AD FS) for authentication. As a systems administrator, you are tasked with planning the migration from AD FS to Microsoft Entra ID cloud authentication. You use Staged Rollout to ensure minimal disruption. One of your user groups contains 60,000 members.<br><br>You need to ensure a smooth transition.<br><br><strong>What should you do next?</strong>`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content:
            "Split the group into smaller groups of 50,000 users or less before proceeding with the rollout.",
          correct: true,
        },
        {
          code: "B",
          content:
            "Proceed with the rollout but disable legacy authentication to accommodate the larger group.",
          correct: false,
        },
        {
          code: "C",
          content:
            "Proceed with the rollout, as group size limits do not apply to this feature.",
          correct: false,
        },
        {
          code: "D",
          content:
            "Use dynamic groups to automatically manage the group size during the rollout.",
          correct: false,
        },
      ],
      explanation: `<p>You should split the group into smaller groups of 50,000 users or less before proceeding with the rollout. To stay within the limitations of Staged Rollout, you should split any group larger than 50,000 users into smaller groups. By doing this, you ensure that the rollout can proceed without hitting any group size restrictions, which could otherwise cause delays or errors.</p>
<p>You should not proceed with the rollout, as group size limits do apply to this feature. Staged Rollout has a limitation on group size, specifically capping it at 50,000 users. If you try to proceed with a group larger than this limit, you could run into issues that might disrupt the migration process. It is important to adhere to these guidelines to ensure a smooth transition.</p>
<p>You should not use dynamic groups to automatically manage the group size during the rollout. While dynamic groups might seem like a convenient way to manage user groups, they are not supported in Staged Rollout. The system requires static groups to be used, so relying on dynamic groups would not be a viable solution in this scenario.</p>
<p>You should not proceed with the rollout but disable legacy authentication to accommodate the larger group. Disabling legacy authentication does not address the issue of group size limits. While it is important to consider legacy authentication during the migration, it has no bearing on the need to split large groups. The correct approach would still involve breaking down the large group into smaller ones, regardless of the legacy authentication settings.</p>`,
      category: "Microsoft Entra / Azure AD Migration",
    },
  ],
};

export default ImplementAndManageUserIdentities;
