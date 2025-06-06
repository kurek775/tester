import type { Test } from "../models/Test.model";

const ImplementAuth: Test = {
  code: "ImplementAuth",
  title: "Implement authentication and access managment",
  questions: [
    {
      code: "Q1",
      content: `  Your company is using group-based licensing as shown below:<br><br>
             <table class="table table-bordered">
            <thead>
              <tr><th>Group</th><th>License</th></tr>
            </thead>
            <tbody>
              <tr><td>Sales</td><td>Microsoft 365 E3</td></tr>
              <tr><td>HR</td><td>Microsoft 365 E3</td></tr>
              <tr><td>IT</td><td>Microsoft 365 E3</td></tr>
            </tbody>
          </table><br>
          <p>You need to implement Microsoft Entra multifactor authentication (MFA).</p>
          <ul>
            <li>Users from the <strong>Sales</strong>, <strong>IT</strong>, and <strong>HR</strong> departments must enroll in MFA at next sign-in.</li>
            <li>They should be able to bypass registration for up to <strong>14 days</strong>.</li>
            <li>Registration must only occur from <em>compliant devices</em> or <em>trusted locations</em>.</li>
            <li>Users should only access Microsoft 365 services included in their license.</li>
          </ul>
          <p><strong>Solution:</strong> You enable Security Defaults.</p><p><strong>Does this solution meet the goal?</strong></p>
        `,
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "Security Defaults force MFA but do not allow restrictions to trusted devices or locations. Conditional Access is needed, which is incompatible with Security Defaults.",
      category: "Microsoft Entra / Azure AD Security ",
    },
    {
      code: "Q2",
      content: `  Your company is using group-based licensing as shown below:<br><br>
             <table class="table table-bordered">
            <thead>
              <tr><th>Group</th><th>License</th></tr>
            </thead>
            <tbody>
              <tr><td>Sales</td><td>Microsoft 365 E3</td></tr>
              <tr><td>HR</td><td>Microsoft 365 E3</td></tr>
              <tr><td>IT</td><td>Microsoft 365 E3</td></tr>
            </tbody>
          </table><br>
          <p>You need to implement Microsoft Entra multifactor authentication (MFA).</p>
          <ul>
            <li>Users from the <strong>Sales</strong>, <strong>IT</strong>, and <strong>HR</strong> departments must enroll in MFA at next sign-in.</li>
            <li>They should be able to bypass registration for up to <strong>14 days</strong>.</li>
            <li>Registration must only occur from <em>compliant devices</em> or <em>trusted locations</em>.</li>
            <li>Users should only access Microsoft 365 services included in their assigned license.</li>
          </ul>
          <p>
            <strong>Solution:</strong> You enable the MFA registration policy in Identity Protection,
            and include the Sales, HR, and IT groups.
            You configure a Conditional Access policy that allows users from these groups
            to register security information from trusted locations and devices only.
          </p>
          <p><strong>Does this solution meet the goal?</strong></p>
        `,
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation: `
          This solution does not meet the goal. It will force users to register their security information at next sign-in,
          with a 14-day grace period and from trusted devices or locations. However, the Identity Protection feature used here
          requires Microsoft Entra ID P2, which is not included in the Microsoft 365 E3 license assigned to these groups.
        `,
      category: "Microsoft Entra / Azure AD Security",
    },
    {
      code: "Q3",
      isHtmlContent: true,
      content: `
          Your company is using group-based licensing as shown below:<br><br>
             <table class="table table-bordered">
            <thead>
              <tr><th>Group</th><th>License</th></tr>
            </thead>
            <tbody>
              <tr><td>Sales</td><td>Microsoft 365 E3</td></tr>
              <tr><td>HR</td><td>Microsoft 365 E3</td></tr>
              <tr><td>IT</td><td>Microsoft 365 E3</td></tr>
            </tbody>
          </table><br>
          You need to implement Microsoft Entra multifactor authentication (MFA).<br><br>
          You need to make sure that users from the Sales, IT, and HR departments are forced to enroll for Microsoft Entra MFA the next time that they sign in.<br><br>
          Users should be able to bypass the registration up to 14 days, and the registration of security information should be allowed from compliant devices or trusted locations only.<br><br>
          You need to make sure that users only use the Microsoft 365 services that are included in the assigned license.<br><br>
          <b>Solution:</b> You configure two Conditional Access policies. The first policy requires Microsoft Entra MFA for all apps and all users. The second policy prevents users from registering their security information from untrusted and unmanaged devices.<br><br>
          <b>Does this solution meet the goal?</b>
        `,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      category: "Microsoft Entra ID / Conditional Access",
      explanation: `
          This solution does not meet the goal. This solution will force the users to register their security information during their next sign-in. The users will be able to register their security information from trusted locations and compliant devices only; however, they will not be able to bypass the registration. Conditional Access does not allow you to postpone the registration wizard, so the users will need to register for MFA before they can access the protected resources.
        `,
    },
    {
      code: "Q4",
      isHtmlContent: true,
      content: `
          You are the global administrator of a company that has recently implemented Hybrid Microsoft Entra ID by installing Microsoft Entra Connect in their local data center. All users are synchronized and Password-Hash Sync is enabled. All users are assigned the Microsoft 365 Business Standard license.<br><br>
          You need to enable Self-Service Password Reset (SSPR) for all users.<br><br>
          <strong>Which two actions should you perform?</strong> Each correct answer presents part of the solution.
        `,
      options: [
        {
          code: "A",
          content:
            "Purchase Microsoft Entra ID P2 licensing for the global administrator.",
          correct: false,
        },
        {
          code: "B",
          content: "Purchase Microsoft 365 Business Premium for all users.",
          correct: true,
        },
        {
          code: "C",
          content:
            "Enable Self-Service Password Reset (SSPR) for all users in Microsoft Entra ID and run the Microsoft Entra Connect Wizard on-premises.",
          correct: true,
        },
        {
          code: "D",
          content:
            "Enable Self-Service Password Reset (SSPR) for the Domain Users security group in Active Directory, then enable the feature in Microsoft Entra Connect.",
          correct: false,
        },
      ],
      category: "Microsoft Entra ID – Hybrid Identity and Licensing",
      explanation: `
          You should enable Self-Service Password Reset (SSPR) for all users in Microsoft Entra ID and run the Microsoft Entra Connect Wizard on-premises. Enabling SSPR in a hybrid scenario requires the service to be enabled both in Microsoft Entra ID and on-premises via Microsoft Entra Connect; however, it is not available to the Microsoft Entra ID free SKU.<br><br>
          You should also purchase Microsoft 365 Business Premium for all users. To activate the hybrid feature, Microsoft Entra ID Premium is required. Microsoft Entra ID P1 is included with Microsoft 365 Business Premium and Microsoft 365 Enterprise license bundles.<br><br>
          You should not enable SSPR for the Domain Users security group in Active Directory, then enable the feature in Microsoft Entra ID. Active Directory is an on-premises technology that does not support the SSPR feature. It must be enabled in the Microsoft Entra Connect application for it to have an effect on-premises.<br><br>
          You should not purchase Microsoft Entra ID P2 licensing for the global administrator. This would technically enable the feature for all users since SSPR is a tenant-wide feature not limited to a single user account; however, you would be in direct violation of the license agreement with Microsoft using the feature for all users.
        `,
    },
    {
      code: "Q68",
      isHtmlContent: true,
      content: `
          You manage all your company user accounts in a Microsoft Entra tenant.<br><br>
          To safeguard access to the corporate data and applications, your security team wants to enable a second form of authentication for end users during their sign-in process.<br><br>
          You need to enforce all your users to register for Microsoft Entra multifactor authentication (MFA).<br><br>
          <strong>What should you do?</strong>
        `,
      options: [
        {
          code: "A",
          content: "Create a new access review.",
          correct: false,
        },
        {
          code: "B",
          content: "Enable security defaults.",
          correct: true,
        },
        {
          code: "C",
          content:
            "Use the user.objectId -ne null membership rule in the dynamic security groups.",
          correct: false,
        },
        {
          code: "D",
          content: "Update an existing catalog of resources.",
          correct: false,
        },
      ],
      category: "Microsoft Entra ID – Authentication and Security Defaults",
      explanation: `
          You should enable security defaults. Security defaults is a feature which is available in the free version of Microsoft Entra ID. It delivers preconfigured security settings that protect your organization, and these include the requirement for all users to register for Microsoft Entra multifactor authentication (MFA).<br><br>
          You should not create a new access review. Access reviews help you to efficiently manage role assignments, group membership and access to the enterprise app in your Microsoft Entra ID. You can use them to schedule regular reviews, delegate them to specific users, and automate the outcomes to manage user access risks and meet compliance requirements.<br><br>
          You should not update an existing catalog of resources. A catalog allows you to group related resources and access packages. You can use a catalog of resources as a part of Microsoft Entra ID entitlement management.<br><br>
          You should not use the ‘user.objectId -ne null’ membership rule in the dynamic security groups. You can use this membership rule to create “all users” security groups. This would update the group’s membership dynamically and include all Microsoft Entra ID user accounts. However, by creating dynamic users on its own you cannot enforce the registration of end users for MFA.
        `,
    },
    {
      code: "Q69a",
      isHtmlContent: true,
      content: `
          <p>Your company has a Microsoft Entra tenant.</p>
          <p>Your end users access the organizational resources from both company-owned and personal devices. You want to deploy Microsoft Entra multifactor authentication (MFA) to protect access to your company’s data and applications.</p>
          <p><strong>Microsoft Entra MFA can send push notifications to the Microsoft Authenticator app on end user devices.</strong></p>
          <p>Is this statement true?</p>
        `,
      options: [
        { code: "A", content: "Yes", correct: true },
        { code: "B", content: "No", correct: false },
      ],
      category: "Microsoft Entra ID – MFA",
      explanation: `
          Microsoft Entra multifactor authentication (MFA) can send push notifications to the Microsoft Authenticator app on end user devices. This is one of the supported authentication methods and is considered reliable and less intrusive.
        `,
    },
    {
      code: "Q69b",
      isHtmlContent: true,
      content: `
          <p>Your company has a Microsoft Entra tenant.</p>
          <p>Your end users access the organizational resources from both company-owned and personal devices. You want to deploy Microsoft Entra multifactor authentication (MFA) to protect access to your company’s data and applications.</p>
          <p><strong>The Microsoft Authenticator app generates a new OATH token once every two minutes.</strong></p>
          <p>Is this statement true?</p>
        `,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      category: "Microsoft Entra ID – MFA",
      explanation: `
          The Microsoft Authenticator app generates a new token every 30 seconds, not every two minutes. You can use the verification code option in situations where your phone lacks connectivity.
        `,
    },
    {
      code: "Q69c",
      isHtmlContent: true,
      content: `
          <p>Your company has a Microsoft Entra tenant.</p>
          <p>Your end users access the organizational resources from both company-owned and personal devices. You want to deploy Microsoft Entra multifactor authentication (MFA) to protect access to your company’s data and applications.</p>
          <p><strong>You can manually block Microsoft Entra MFA attempts for specific accounts in your tenant.</strong></p>
          <p>Is this statement true?</p>
        `,
      options: [
        { code: "A", content: "Yes", correct: true },
        { code: "B", content: "No", correct: false },
      ],
      category: "Microsoft Entra ID – MFA",
      explanation: `
          You can manually block Microsoft Entra MFA attempts for specific accounts in your tenant. For example, if an end user reports a device lost or stolen, blocking MFA for their account will deny all attempts and keep them blocked for up to 90 days.
        `,
    },
    {
      code: "Q70",
      isHtmlContent: true,
      content: `
          <p>Your company has a Microsoft Entra tenant.</p>
          <p>You need to replace the existing basic password authentication which is used by your Microsoft Entra ID accounts with a more secure authentication method. You want to choose passwordless authentication methods because of their usability and higher level of security.</p>
          <p><strong>Which two authentication methods should you choose?</strong><br>Each correct answer presents part of the solution.</p>
        `,
      options: [
        { code: "A", content: "Phone call verification", correct: false },
        {
          code: "B",
          content: "Fast Identity Online (FIDO) 2 security keys",
          correct: true,
        },
        { code: "C", content: "Windows Hello for Business", correct: true },
        { code: "D", content: "Text message verification", correct: false },
      ],
      category: "Microsoft Entra ID – Authentication",
      explanation: `
          You should choose <strong>Windows Hello for Business</strong> and <strong>FIDO2 security keys</strong>. Both of these authentication methods are passwordless and allow you to replace basic passwords with something that your users are, or with something that they have.<br><br>
          
          Windows Hello for Business allows end users to log in with their biometric or PIN gesture. With FIDO2, you use external security keys or platform keys built into a device. A FIDO2 security key can be attached to a USB port, although some vendors enable data exchange via Bluetooth or NFC connectivity.<br><br>
          
          You should <strong>not</strong> choose a phone call or text message verification. Both are phone options which are added as a secondary method on top of basic password authentication. With voice verification, end users receive an automated voice call on their registered phone numbers, and then they need to complete the verification process by pressing the # button. With text message verification, an SMS is sent to the registered mobile device of an end user with a code that should be manually entered into the sign-in window.
        `,
    },
    {
      code: "Q71",
      isHtmlContent: true,
      content: `
          <p>The CSO of your company asked you to configure multi-factor authentication (MFA).</p>
          <p>You need to identify the verification methods that can be configured for use with Microsoft Entra MFA.</p>
          <p><strong>Which three verification methods should you choose?</strong><br>Each correct answer presents a complete solution.</p>
        `,
      options: [
        { code: "A", content: "Email address", correct: false },
        { code: "B", content: "Text message", correct: true },
        { code: "C", content: "Microsoft Authenticator app", correct: true },
        { code: "D", content: "Voice call", correct: true },
        { code: "E", content: "Security questions", correct: false },
      ],
      category: "Microsoft Entra ID – Authentication",
      explanation: `
          You should use <strong>text messages</strong>, <strong>voice calls</strong>, and the <strong>Microsoft Authenticator app</strong>.
          All three of these options can be used for both multi-factor authentication (MFA) and self-service password reset (SSPR).<br><br>
      
          You should <strong>not</strong> use <strong>security questions</strong> or <strong>email addresses</strong>. These options cannot be used for MFA. They can only be used for SSPR.
        `,
    },
    {
      code: "Q72",
      isHtmlContent: true,
      content: `
          <p>You are the security administrator for Company1. You are setting up self-service password reset (SSPR) in Microsoft Entra ID.</p>
          <p>Company policy dictates that users will need two authentication methods to perform SSPR. SMS and phone calls cannot be used for SSPR due to security reasons.</p>
          <p>A user performs SSPR. The user approves authentication in the Authenticator App as the first authentication method.</p>
          <p>You need to determine which second authentication method will be available to the user to perform SSPR.</p>
          <p><strong>What should you choose?</strong></p>
        `,
      options: [
        { code: "A", content: "OATH Hardware Token", correct: false },
        { code: "B", content: "FIDO2 Authentication token", correct: false },
        {
          code: "C",
          content: "Microsoft Authenticator App verification code",
          correct: false,
        },
        { code: "D", content: "Email", correct: true },
      ],
      category: "Microsoft Entra ID – SSPR",
      explanation: `
          <p>You should choose <strong>email</strong>. Email is a valid method to authenticate when performing SSPR. 
          The user will receive an email at the registered email address with a link to perform the verification.</p>
      
          <p>You should <strong>not</strong> choose a Microsoft Authenticator App verification code. There are two methods of performing authentication with the Authenticator App: 
          approving the request sent in a push message and using the verification code. Only one of those may be used for authenticating when performing SSPR. 
          The approval message was used for the first authentication. Therefore, the verification code cannot be used for the second part of the authentication.</p>
      
          <p>You should not choose FIDO2 Authentication token. FIDO2 tokens cannot be used for performing SSPR. They can only be used for performing multifactor authentication 
          or as the primary authentication when signing in.</p>
      
          <p>You should not choose OATH Hardware Token. OATH Hardware tokens cannot be used for performing SSPR. They can only be used for performing multifactor authentication.</p>
      
          <p><strong>Best practice</strong> when setting up SSPR is to require two authentication methods to perform SSPR. The second method can be the Microsoft Authenticator App verification code. 
          You should encourage your user to register more than one method for performing SSPR, even when you require only one method to be used. 
          That way, users can perform SSPR even when they do not have access to one of the configured methods; for example, when not having access to their mobile phone to receive the text message.</p>
        `,
    },
    {
      code: "Q73",
      isHtmlContent: true,
      content: `
          <p>You are an Identity and Access Administrator for Company1.</p>
      
          <p>Your company has regional offices in Miami and Paris. 
          All user identities are managed in a Microsoft Entra tenant.</p>
      
          <p>You need to prevent users from using the company name and locations in their passwords. 
          You configure a custom list with banned passwords in Microsoft Entra ID as shown in the exhibit.</p>
      
          <p><strong>Which password should be allowed by your password protection configuration?</strong></p>
        `,
      options: [
        { code: "A", content: "C0mPany1P@ri$Mi@mi1", correct: false },
        { code: "B", content: "P@ri$1Mi@mi1", correct: false },
        { code: "C", content: "C0mPany123P@ris1", correct: true },
        { code: "D", content: "C0mPany123C0mPany1", correct: false },
      ],
      category: "Microsoft Entra ID – Password Protection",
      explanation: `
          <p>The password <code>C0mPany123P@ris1</code> should be allowed by your password protection configuration. 
          Microsoft Entra ID password protection accepts passwords that get at least five points after their score calculation.</p>
      
          <p>Password protection converts all password characters to lower case and substitutes 0 with o, 1 with l, $ with s, and @ with a. 
          Each password from the custom list with passwords is given one point and each remaining character is also given one point.</p>
      
          <p><code>C0mPany123P@ris1</code> gets five points for: 
          C0mPany1 + 2 + 2 (for P@ris) = 5, which is why this password should be allowed.</p>
      
          <p><code>C0mPany123C0mPany1</code>, <code>P@ri$1Mi@mi1</code> and <code>C0mPany1P@ri$Mi@mi1</code> should not be allowed. 
          These passwords are each given four points: 
          C0mPany123C0mPany1 (C0mPany1 + 2 + 3 + C0mPany1), 
          P@ri$1Mi@mi1 (P@ri$ + 1 + Mi@mi + 1), 
          C0mPany1P@ri$Mi@mi1 (C0mPany1 + P@ri$ + Mi@mi + 1). 
          To be accepted, a password should get at least five points.</p>
        `,
    },
    {
      code: "Q81",
      isHtmlContent: true,
      content: `
          <p>CompanyA operates a large warehouse and uses Windows 10 Enterprise 1909 computers that are all Microsoft Entra ID Joined. All company workers use shared workstations and are assigned a Microsoft 365 E3 license. Floor managers have a dedicated Microsoft Surface Go device and Multi-Factor Authentication (MFA) has been implemented using combined registration.</p>
          <p>The company wants to implement passwordless identities to reach a more mature Zero Trust model.</p>
          <p>You need to recommend a cost-effective passwordless solution.</p>
          <p><strong>What should you do?</strong></p>
        `,
      options: [
        {
          code: "A",
          content:
            "Assign dedicated FIDO2 security keys to all CompanyA employees.",
          correct: false,
        },
        {
          code: "B",
          content:
            "Implement Windows Hello for Business for all CompanyA employees.",
          correct: false,
        },
        {
          code: "C",
          content:
            "Deploy Microsoft Authenticator app passwordless sign-in to all workers and implement Windows Hello for Business for all floor managers.",
          correct: false,
        },
        {
          code: "D",
          content:
            "Assign dedicated FIDO2 security keys to all workers and implement Windows Hello for Business for all floor managers.",
          correct: true,
        },
      ],
      explanation: `
          Workers use shared workstations and cannot use Windows Hello for Business. FIDO2 keys are cost-effective for them. Floor managers have dedicated devices that can use Windows Hello. So, the best solution is to assign FIDO2 keys to workers and Windows Hello for managers.
        `,
      category: "Microsoft Entra - Identity Strategy",
    },
    {
      code: "Q82",
      isHtmlContent: true,
      content: `
          <p>You are the administrator of your company. You are implementing Microsoft Entra multi-factor authentication (MFA) for Self-Service Password Reset (SSPR).</p>
          <p>You need to configure the different authentication methods that can be used for Microsoft Entra MFA and SSPR.</p>
          <p><strong>Which three methods should you choose? Each correct answer presents a complete solution.</strong></p>
        `,
      options: [
        { code: "A", content: "Text message to a phone", correct: true },
        { code: "B", content: "Temporary Access Pass", correct: false },
        { code: "C", content: "FIDO2 security key", correct: false },
        { code: "D", content: "Call to a phone", correct: true },
        { code: "E", content: "Mobile app verification code", correct: true },
      ],
      explanation: `
          Mobile app verification, text message, and voice call are valid for both MFA and SSPR. FIDO2 and Temporary Access Pass are not valid for SSPR authentication.
        `,
      category: "Microsoft Entra - Authentication Methods",
    },
    {
      code: "Q84",
      isHtmlContent: true,
      content: `
          <p>Your company uses a password as the primary authentication factor and it wants to improve security by leveraging Microsoft Entra Multi-Factor Authentication (MFA). All employees receive a laptop and mobile phone by default. Employees regularly work remotely from locations where there is no mobile service or available wireless internet. At these locations, employees can connect to the internet by connecting a Local Area Network (LAN) cable to their laptops.</p>
          <p>You need to recommend a secondary authentication option for MFA that can be used to log into your company's environment, even when employees are working remotely.</p>
          <p><strong>Which secondary authentication option for MFA should you recommend?</strong></p>
        `,
      options: [
        { code: "A", content: "Microsoft Authenticator app", correct: true },
        { code: "B", content: "Phone call", correct: false },
        { code: "C", content: "Security questions", correct: false },
        { code: "D", content: "Email", correct: false },
      ],
      category: "Microsoft Entra MFA",
      explanation: `
          You should use the Microsoft Authenticator app. It works with passwordless sign-in, verification codes, and requires internet only for push approvals. In remote scenarios without wireless, it can still generate codes locally.
          <br><br>
          Phone call and email are not feasible in no-signal environments. Security questions are only valid for SSPR, not for MFA.
        `,
    },
    {
      code: "Q85",
      isHtmlContent: true,
      content: `
          <p>Your company plans to deploy Microsoft Entra ID. The company wants to implement multi-factor authentication (MFA) to provide security for user access to the network. You plan to set up MFA for all users.</p>
          <p>You need to determine the lowest cost licensing requirement for implementing MFA. The implementation must support using a mobile app as a second authentication factor.</p>
          <p><strong>Which licensing option should you recommend?</strong></p>
        `,
      options: [
        { code: "A", content: "Microsoft 365 Apps", correct: false },
        { code: "B", content: "Microsoft Entra ID P2", correct: false },
        { code: "C", content: "Microsoft Entra ID P1", correct: false },
        { code: "D", content: "Microsoft Entra ID Free", correct: true },
      ],
      category: "Microsoft Entra Licensing",
      explanation: `
          Microsoft Entra ID Free allows implementing MFA using security defaults and supports mobile apps. It is the lowest cost option suitable for the requirement.<br><br>
          Microsoft 365 Apps and Entra ID P1/P2 offer more control but are more expensive.
        `,
    },
    {
      code: "Q16",
      isHtmlContent: true,
      content: `
          <p>Your company has a Microsoft 365 tenant. You want to configure multi-factor authentication (MFA) for user devices.
          Your network includes Android, iOS, MacOS, and Windows devices. You want to use the Microsoft Authenticator app to
          receive notifications to approve sign-in requests.</p>
          <p>You need to identify which devices can be used to receive MFA notifications.</p>
          <p><strong>Which device types support the Microsoft Authentication app?</strong></p>
        `,
      options: [
        { code: "A", content: "Android and iOS only", correct: true },
        { code: "B", content: "Android only", correct: false },
        { code: "C", content: "iOS only", correct: false },
        { code: "D", content: "Windows only", correct: false },
        {
          code: "E",
          content: "Android, iOS, Windows, and MacOS",
          correct: false,
        },
      ],
      explanation: `
          Authentication notification through the Microsoft Authentication app to approve or deny sign-in is supported for <strong>Android and iOS only</strong>.
          The app is a mobile app and is supported for these operating systems only. Users can either approve/deny access via push notification or generate an OAUTH verification code.
          <br><br>
          The Authentication app is <strong>not supported</strong> for Windows or MacOS devices.
        `,
      category: "Microsoft Entra MFA",
    },
    {
      code: "Q17",
      isHtmlContent: true,
      content: `
          <p>Your company has a Microsoft 365 tenant. Users are configured to use the Microsoft Authentication app to support
          access to Microsoft 365 services through multi-factor authentication (MFA).</p>
          <p>You need to prevent MFA authentication attempts when a user device is reported as lost or stolen. MFA authentication
          attempts should be automatically denied.</p>
          <p><strong>Which Microsoft Entra MFA feature should you enable to configure this?</strong></p>
        `,
      options: [
        { code: "A", content: "Account lockout", correct: false },
        { code: "B", content: "Phone settings", correct: false },
        { code: "C", content: "Block/unblock users", correct: true },
        { code: "D", content: "Fraud alert", correct: false },
      ],
      explanation: `
          <p>You should configure <strong>block/unblock users</strong> through the Azure portal. Any authentication attempt by a blocked user is automatically denied.
          A user remains blocked for 90 days or until they are manually unblocked. This will prevent the user from receiving any notifications for authentication attempts.</p>
          <p>You should not configure <strong>account lockout</strong>. This is used to temporarily lock a user who makes too many failed authentication attempts.</p>
          <p>You should not configure <strong>fraud alert</strong>. This setting is used to enable users to report fraudulent attempts to access their resources.
          Users can report fraud attempts through their phone or through the Microsoft Authentication app.</p>
          <p>You should not configure <strong>phone settings</strong>. This feature is used to configure settings related to phone calls and greetings for cloud and on-premises environments.</p>
        `,
      category: "Microsoft Entra MFA",
    },
    {
      code: "Q18",
      isHtmlContent: true,
      content: `
          <p>Your company has a hybrid environment with an Active Directory Domain Services (AD DS) and Microsoft Entra ID.
          Your company wants to implement passwordless authentication to control cloud and on-premises corporate resource access.
          You plan to use Windows Hello for authentication using biometrics. Each user has their own designated Windows PC which is used for access.</p>
          
          <p>You need to identify where user biometric information is stored.</p>
          
          <p><strong>Where is biometric information stored?</strong></p>
        `,
      options: [
        { code: "A", content: "On an AD DS domain controller", correct: false },
        {
          code: "B",
          content: "As a part of Microsoft Entra ID metadata",
          correct: false,
        },
        { code: "C", content: "On each user's computer", correct: true },
        { code: "D", content: "In an Azure Key Vault", correct: false },
      ],
      explanation: `
          <p>The biometric information for Windows Hello authentication is stored on each user's computer.
          The biometric information itself is never passed for authentication.
          If a PIN is used for authentication, that information is also stored locally.</p>
      
          <p>An Azure Key Vault cannot be used to store biometric authentication information.
          A Key Vault is used to securely store secrets such as API keys, passwords, certificates, or cryptographic keys;
          however, it is not used to store biometric information for Windows Hello.</p>
      
          <p>Because it is not stored separate from the client’s computer,
          biometric information is not stored on an AD DS domain controller or as a part of Microsoft Entra ID.</p>
        `,
      category: "Windows Hello for Business",
    },
    {
      code: "Q19A",
      isHtmlContent: true,
      content: `
          <p>Your company has a Microsoft 365 tenant. The company wants to start using multi-factor authentication (MFA) to improve user access security.</p>
          <p>You need to determine if MFA can meet your security requirements.</p>
          <p><strong>Statement:</strong> Using a text message containing a verification code for authentication requires the Microsoft Authentication app.</p>
          <p>Select <strong>Yes</strong> if the statement is true. Otherwise, select <strong>No</strong>.</p>
        `,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation: `
          <p>Using a text message containing a verification code for authentication does not require the Microsoft Authentication app.
          You can configure MFA to send a verification code to a user's phone that the user would then enter into the sign-in interface.</p>
          
          <p>The Microsoft Authentication app is used to have a notification sent to the user to allow or deny authentication
          and it can also be used to generate a new verification code.</p>
        `,
      category: "Microsoft Entra MFA – Authentication Methods",
    },
    {
      code: "Q19B",
      isHtmlContent: true,
      content: `
          <p>Your company has a Microsoft 365 tenant. The company wants to start using multi-factor authentication (MFA) to improve user access security.</p>
          <p>You need to determine if MFA can meet your security requirements.</p>
          <p><strong>Statement:</strong> Microsoft Entra MFA is supported with all Microsoft Entra ID editions.</p>
          <p>Select <strong>Yes</strong> if the statement is true. Otherwise, select <strong>No</strong>.</p>
        `,
      options: [
        { code: "A", content: "Yes", correct: true },
        { code: "B", content: "No", correct: false },
      ],
      explanation: `
          <p>Microsoft Entra MFA is supported with all Microsoft Entra ID editions. The features and granularity of support is determined by the license level.</p>
          
          <p>The Microsoft Entra ID Free license lets you configure MFA for all users but does not allow configuration of individual user settings.
          Microsoft Entra ID P1 and P2 allow MFA with Conditional Access.</p>
        `,
      category: "Microsoft Entra MFA – Licensing",
    },
    {
      code: "Q19C",
      isHtmlContent: true,
      content: `
          <p>Your company has a Microsoft 365 tenant. The company wants to start using multi-factor authentication (MFA) to improve user access security.</p>
          <p>You need to determine if MFA can meet your security requirements.</p>
          <p><strong>Statement:</strong> You can configure fraud alert to automatically block a user who reports fraud.</p>
          <p>Select <strong>Yes</strong> if the statement is true. Otherwise, select <strong>No</strong>.</p>
        `,
      options: [
        { code: "A", content: "Yes", correct: true },
        { code: "B", content: "No", correct: false },
      ],
      explanation: `
          <p>You can configure fraud alert to automatically block a user who reports fraud.
          Fraud alert is configured through the Azure portal.</p>
          
          <p>When blocked after a reported fraud, the user account will remain blocked for 90 days by default.</p>
        `,
      category: "Microsoft Entra MFA – Security Features",
    },
    {
      code: "Q20",
      isHtmlContent: true,
      content: `
          <p>Your company plans to use Microsoft Entra Password Protection to cut down on the use of weak and easily-guessed passwords by users.</p>
          <p>You enable custom banned passwords as part of the configuration and include the following in the banned password list:</p>
          <ul>
            <li>company1</li>
            <li>Dallas</li>
            <li>MyProduct</li>
            <li>goodpass</li>
          </ul>
          <p>You need to identify which passwords would be accepted as valid passwords.</p>
          <p><strong>Which two passwords would be allowed?</strong> Each correct answer presents a complete solution.</p>
        `,
      options: [
        { code: "A", content: "goodp@ss1GOODPASS52", correct: false },
        { code: "B", content: "Mypr0ductXYZgoodpass", correct: true },
        { code: "C", content: "CoMpAnY1DaLlAs124", correct: true },
        { code: "D", content: "CoMpAnYDaLlAs12", correct: false },
        { code: "E", content: "MYPRODUCTCOMPANYMYPRODUCT", correct: false },
      ],
      explanation: `
          <p>The two acceptable passwords are <strong>CoMpAnY1DaLlAs124</strong> and <strong>Mypr0ductXYZgoodpass</strong>.</p>
      
          <p>New passwords are evaluated using normalized versions of entries (all lowercase, common substitutions resolved) and scored.</p>
          <ul>
            <li>Each banned password match deducts 1 point.</li>
            <li>Each additional character not part of any banned password adds 1 point.</li>
          </ul>
          <p>A minimum score of 5 is required for acceptance.</p>
      
          <p><strong>CoMpAnY1DaLlAs124</strong> evaluates to <code>company1dallas124</code> → 2 banned words = 2 points deducted, 3 other characters = 3 points → total score = 5 ✅</p>
          <p><strong>Mypr0ductXYZgoodpass</strong> evaluates to <code>myproductxyzgoodpass</code> → 2 banned words = 2 points deducted, 3 additional characters = 3 points → total score = 5 ✅</p>
          <p><strong>CoMpAnYDaLlAs12</strong> evaluates to 2 banned words + only 2 additional characters → total = 4 ❌</p>
          <p><strong>goodp@ss1GOODPASS52</strong> evaluates to <code>goodpass1goodpass52</code> → 2 banned words + 2 additional characters = 4 ❌</p>
          <p><strong>MYPRODUCTCOMPANYMYPRODUCT</strong> evaluates to <code>myproductcompanymyproduct</code> → 3 banned words + 0 additional characters = 3 ❌</p>
        `,
      category: "Microsoft Entra Password Protection",
    },
    {
      code: "Q108A",
      isHtmlContent: true,
      content: `
    <p>Your company has a hybrid environment with an Active Directory Domain Server (AD DS) and Microsoft Entra ID. You configure self-service password reset (SSPR) by using the following settings:</p>
    <ul>
      <li>Require users to register when signing in: Yes</li>
      <li>Number of methods required to reset: 1</li>
    </ul>
    <p>Your network is configured to use pass-through authentication (PTA). Password changes should be written to AD DS. You want to keep changes to the network to a minimum.</p>
    <p>You need to identify configuration changes and how SSPR is supported on your network.</p>
    <p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>
    <p><strong>Statement:</strong> You must enable password writeback in Microsoft Entra Connect.</p>
    `,
      options: [
        { code: "A", content: "Yes", correct: true },
        { code: "B", content: "No", correct: false },
      ],
      explanation: `You must enable password writeback in Microsoft Entra Connect. This is a prerequisite for enabling self-service password reset (SSPR) writeback. Once password writeback has been enabled in Microsoft Entra Connect, you can configure password writeback in Microsoft Entra for the password changes to be written back to AD DS in real time.`,
      category: "Microsoft Entra SSPR",
    },
    {
      code: "Q108B",
      isHtmlContent: true,
      content: `
    <p>Your company has a hybrid environment with an Active Directory Domain Server (AD DS) and Microsoft Entra ID. You configure self-service password reset (SSPR) by using the following settings:</p>
    <ul>
      <li>Require users to register when signing in: Yes</li>
      <li>Number of methods required to reset: 1</li>
    </ul>
    <p>Your network is configured to use pass-through authentication (PTA). Password changes should be written to AD DS. You want to keep changes to the network to a minimum.</p>
    <p>You need to identify configuration changes and how SSPR is supported on your network.</p>
    <p><strong>Statement:</strong> You must deploy Microsoft Entra Password Protection proxy service and the Microsoft Entra Password Protection Domain Controller (DC) agent in your on-premises environment.</p>
    `,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation: `You do not have to deploy Microsoft Entra Password Protection proxy service and the Microsoft Entra Password Protection DC agent in your on-premises environment. This is a requirement when you implement Microsoft Entra Password Protection in the cloud and you want it to apply to your on-premises environment.`,
      category: "Microsoft Entra SSPR",
    },
    {
      code: "Q108C",
      isHtmlContent: true,
      content: `
    <p>Your company has a hybrid environment with an Active Directory Domain Server (AD DS) and Microsoft Entra ID. You configure self-service password reset (SSPR) by using the following settings:</p>
    <ul>
      <li>Require users to register when signing in: Yes</li>
      <li>Number of methods required to reset: 1</li>
    </ul>
    <p>Your network is configured to use pass-through authentication (PTA). Password changes should be written to AD DS. You want to keep changes to the network to a minimum.</p>
    <p>You need to identify configuration changes and how SSPR is supported on your network.</p>
    <p><strong>Statement:</strong> You must configure the network to use Active Directory Federation Services (AD FS).</p>
    `,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation: `You do not have to configure the network to use Active Directory Federation Services (AD FS). Password writeback is supported with AD FS authentication but AD FS is not required to support password writeback.`,
      category: "Microsoft Entra SSPR",
    },
    {
      code: "Q1894",
      content: `Your company has Microsoft Entra ID. You plan to implement self-service password reset (SSPR) for all users.<br><br>
      Your company employs temporary employees during peak activity periods. Temporary employees are assigned individual Microsoft Entra ID users. Temporary users are not assigned specific computers but instead choose a computer from a shared pool.<br><br>
      Temporary users use their username and password as their primary authentication when making changes to their passwords.<br><br>
      You need to identify an appropriate secondary authentication method for these users.<br><br>
      What should you recommend?`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "OATH software tokens", correct: false },
        { code: "B", content: "Microsoft Authenticator app", correct: true },
        { code: "C", content: "Microsoft Hello for Business", correct: false },
        { code: "D", content: "FIDO2 security key", correct: false },
      ],
      explanation:
        "You should recommend the Microsoft Authenticator app. The Microsoft Authenticator app can be used for secondary authentication for both self-service password reset (SSPR) and multi-factor authentication (MFA). Use of the Authenticator app requires that the users have access to their mobile devices. Other supported secondary authentication methods for SSPR are SMS verification and voice call.<br><br>You should not use a FIDO2 security key, OATH software token, or Microsoft Hello for Business. Each of these methods are supported for MFA but are not supported as a secondary authentication method for SSPR.",
      category: "Microsoft Entra / Azure AD Security",
    },
    {
      code: "Q899842",
      content: `You are the Microsoft 365 administrator for CompanyA.<br><br>
      CompanyA is moving towards passwordless authentication. All of CompanyA’s users have Windows 10 Microsoft Entra joined workstations which are running Windows 10 version 2004. Users are already enrolled for multi-factor authentication (MFA) using Azure MFA.<br><br>
      CompanyA’s users need to be able to sign-in to their workstations without using their password.<br><br>
      Which two features could you use to allow passwordless sign-in in Windows 10? Each correct answer presents a complete solution.`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Windows Defender Credential Guard",
          correct: false,
        },
        { code: "B", content: "OATH hardware tokens", correct: false },
        { code: "C", content: "Azure MFA Voice call", correct: false },
        { code: "D", content: "FIDO2 security keys", correct: true },
        { code: "E", content: "Windows Hello for Business", correct: true },
      ],
      explanation:
        "You could use FIDO2 security keys. FIDO2 security keys allow passwordless authentication. Administrators can use Fast Identity Online (FIDO) to allow their users to use FIDO2 security keys to sign in to Windows 10 version 1903 or higher. The user does not have to provide a username and password, they only have to provide a FIDO2 security key to sign in. The user then needs to insert a second factor using biometrics, PIN, or gesture.<br><br>You could also use Windows Hello for Business. Windows Hello for Business is also capable of passwordless authentication. Users can set up biometrics such as face or fingerprint to sign in, or they can use a PIN instead of their password. Windows Hello for Business can be used on devices running Windows 10.<br><br>You should not use Windows Defender Credential Guard. Windows Defender Credential Guard does not provide passwordless sign-in into Windows 10 workstations. Windows Defender Credential Guard is a Windows 10 security feature that isolates secrets, using virtualization-based security.<br><br>You should not use OATH hardware tokens as they are not capable of passwordless authentication. OATH uses TOTP (Time-based One Time Password) to provide multi-factor authentication, but the users still need to enter their credentials first.<br><br>You should not use Azure MFA Voice call as it is not capable of passwordless authentication into Windows 10. Phone call verification can be used to provide MFA, but only after the users have entered their credentials first.",
      category: "Microsoft Entra / Azure AD Security",
    },
    {
      code: "Q3",
      content: `You are a support team leader for an organization that has an existing Microsoft Entra tenant. The organization uses certificate-based authentication in Microsoft Entra ID to protect user sign-ins to web browser-based applications on Windows devices.<br><br>
      The organization now wants to use certificate-based authentication on corporate mobile phones. These devices are comprised of various models of Apple phones with different OS versions, as shown in the table below:<br><br>
      <table class="table table-bordered">
        <thead>
          <tr><th>Phone Model</th><th>OS Version</th></tr>
        </thead>
        <tbody>
          <tr><td>iPhone 11</td><td>8</td></tr>
          <tr><td>iPhone 12</td><td>10</td></tr>
          <tr><td>iPhone 13</td><td>12</td></tr>
          <tr><td>iPhone 10</td><td>9</td></tr>
        </tbody>
      </table><br>
      All mobile devices already have the Microsoft Authenticator app, which is used to manage multi-factor authentication (MFA).<br><br>
      You need to ensure that all corporate devices meet the prerequisites for implementing the certificate-based authentication.<br><br>
      What should you do before you can implement certificate-based authentication on the mobile devices?`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Upgrade the OS on the iPhone 10 and iPhone 11.",
          correct: false,
        },
        {
          code: "B",
          content:
            "Remove the Microsoft Authenticator app from all the mobile devices.",
          correct: false,
        },
        {
          code: "C",
          content: "Upgrade the OS on all iPhone models.",
          correct: false,
        },
        {
          code: "D",
          content: "Upgrade the OS on the iPhone 11 only.",
          correct: true,
        },
      ],
      explanation:
        "You should upgrade the OS on the iPhone 11 only. For iOS devices to use certificate-based authentication (CBA), the iOS version must be iOS 9 or later. All the other devices within the organization are either on version 9 or a higher version and therefore do not need to be upgraded.<br><br>You should not remove the Microsoft Authenticator app from the mobile devices. This is another prerequisite that needs to be met in order to implement CBA on iOS devices.",
      category: "Microsoft Entra / Azure AD Security",
    },
    {
      code: "Q4894",
      content: `Your company has an existing Microsoft Entra tenant and an on-premises Active Directory Domain. You use Microsoft Entra Connect to synchronize on-premises object IDs between Microsoft Entra ID and on-premises Active Directory.<br><br>
      The company wants to integrate on-premises applications with Microsoft Entra ID, specifically multi-factor authentication (MFA), and you have been asked to ensure that the environment meets all the prerequisite requirements before deployment.<br><br>
      You need to ensure that all prerequisites are met in order to allow the on-premises applications to integrate with Microsoft Entra ID MFA.<br><br>
      What should you do?`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Deploy Microsoft Entra application proxy.",
          correct: true,
        },
        {
          code: "B",
          content: "Configure an app registration.",
          correct: false,
        },
        {
          code: "C",
          content:
            "Deploy an Active Directory Federation Service (AD FS) server.",
          correct: false,
        },
        {
          code: "D",
          content: "Configure an Enterprise Application.",
          correct: false,
        },
      ],
      explanation:
        "You should deploy Microsoft Entra application proxy to allow on-premises apps to integrate with Microsoft Entra ID Multi-Factor Authentication (MFA). Microsoft Entra application proxy allows secure remote access to on-premises-based applications. Once the user has completed the single sign-on to Microsoft Entra ID, they can access both cloud and on-premises applications via an external URL or an internal application portal.<br><br>You should not configure an app registration to allow on-premises apps to integrate with Microsoft Entra ID MFA. App registration in Microsoft Entra ID allows you to register web or mobile apps with Microsoft Entra ID, but it does not facilitate the registering of on-premises apps.<br><br>You should not configure an Enterprise application to allow on-premises apps to integrate with Microsoft Entra ID MFA. Enterprise application is the application identity within Microsoft Entra ID. The app can only be assigned access to the directory in which it exists.<br><br>You should not deploy an Active Directory Federation Service (AD FS) server to allow on-premises apps to integrate with Microsoft Entra ID MFA. AD FS provides simple and secure identity federation between on-premises AD and Microsoft Entra ID. It is one of multiple authentication options you can configure and use via Microsoft Entra Connect. However, it is not a prerequisite to facilitate on-premises apps to integrate with Microsoft Entra ID MFA.",
      category: "Microsoft Entra / Azure AD Security",
    },
    {
      code: "Q95",
      content: `You manage a Microsoft Entra ID environment in your organization with Password Hash Sync enabled. You are requested to ensure all users in your organization validate their passwords directly against on-premises Active Directory (AD). You chose to switch your organization’s sign-in method from password hash synchronization to pass-through authentication.<br><br>
      You need to plan the change.<br><br>
      What impact should users in managed domains expect after this change?`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content:
            "Users will no longer be able to sign in with their passwords since password hash synchronization is disabled.",
          correct: false,
        },
        {
          code: "B",
          content:
            "Pass-through authentication becomes the primary sign-in method, but previously synchronized password hashes remain unchanged.",
          correct: true,
        },
        {
          code: "C",
          content:
            "Users will be required to reset their passwords immediately after the switch.",
          correct: false,
        },
        {
          code: "D",
          content:
            "The password hashes for all users will be deleted from Microsoft Entra ID.",
          correct: false,
        },
      ],
      explanation:
        "Users should expect that pass-through authentication becomes the primary sign-in method, but previously synchronized password hashes remain unchanged and are retained on Microsoft Entra ID.<br><br>Users should not expect that they will no longer be able to sign in with their passwords since password hash synchronization is disabled. Users can still sign in because pass-through authentication takes over as the primary sign-in method.<br><br>Users should not expect that the password hashes for all users will be deleted from Microsoft Entra ID. The password hashes that were synchronized before the switch are not deleted; they remain stored on Microsoft Entra ID.<br><br>Users should not expect that they will be required to reset their passwords immediately after the switch to pass-through authentication. There is no requirement for users to reset their passwords after the switch to pass-through authentication. Their sign-in process continues smoothly with the new method.",
      category: "Microsoft Entra / Authentication Methods",
    },
    {
      code: "Q56",
      content: `You are setting up Microsoft Entra ID and have been tasked with improving security by implementing multifactor authentication (MFA). You propose allowing users to authenticate with the Microsoft Authenticator app and FIDO2 security keys and have already set up conditional access policies to enforce MFA.<br><br>
      You need to implement your proposed solution.<br><br>
      What should you do next?`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Configure the authentication methods policy.",
          correct: true,
        },
        {
          code: "B",
          content: "Install Microsoft Entra Connect.",
          correct: false,
        },
        {
          code: "C",
          content: "Enable self-service password reset (SSPR).",
          correct: false,
        },
        {
          code: "D",
          content: "Enable legacy authentication protocols.",
          correct: false,
        },
      ],
      explanation:
        "You should configure the authentication methods policy. Configuring the authentication policy involves setting up the authentication methods policy in the Microsoft Entra admin center to allow these specific methods. This step ensures that users can register and use the Microsoft Authenticator app and FIDO2 security keys for authentication.<br><br>You should not enable legacy authentication protocols. Enabling legacy authentication protocols (such as Basic Authentication) can weaken security. Basic Authentication does not support modern authentication methods like multifactor authentication (MFA), making it more susceptible to attacks. Instead, modern authentication protocols like OAuth2 should be used, which support MFA and provide better security.<br><br>You should not install Microsoft Entra Connect. While Microsoft Entra Connect is essential for synchronizing on-premises Active Directory (AD) with Microsoft Entra ID, it is not directly related to enabling specific authentication methods like the Microsoft Authenticator app and FIDO2 security keys.<br><br>You should not enable self-service password reset (SSPR). Enabling SSPR is a useful feature for allowing users to reset their passwords without admin intervention, but it does not directly enable or configure MFA methods.",
      category: "Microsoft Entra / Authentication Methods",
    },
    {
      code: "Q557",
      content: `You work for Company1 as an administrator. You have implemented Conditional Access to secure access to SharePoint Online.<br><br>
      You need to verify access for a specific user based on the following configuration:<br><br>
      <table class="table table-bordered">
        <thead>
          <tr><th>User</th><th>Member of</th></tr>
        </thead>
        <tbody>
          <tr><td>User1</td><td>Group1, Group2</td></tr>
        </tbody>
      </table>
      <br>
      <table class="table table-bordered">
        <thead>
          <tr><th>Policy</th><th>Name</th><th>Users</th><th>Cloud Applications</th><th>Access</th></tr>
        </thead>
        <tbody>
          <tr><td>Policy 1</td><td>Allow SharePoint Access</td><td>Group2</td><td>SharePoint Online</td><td>Grant Access</td></tr>
          <tr><td>Policy 2</td><td>Block SharePoint Access</td><td>Group1</td><td>SharePoint Online</td><td>Block Access</td></tr>
        </tbody>
      </table><br>
      Will User1 have access to SharePoint Online?`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "User1 is a member of both Group1 and Group2. Since both grant and block policies apply, Microsoft Entra ID will evaluate all applicable policies and apply the most restrictive. In this case, 'Block SharePoint Access' takes precedence, so User1 will not have access.",
      category: "Microsoft Entra / Conditional Access",
    },
    {
      code: "Q898445",
      content: `You are evaluating Conditional Access to SharePoint Online for the following user:<br><br>
      <table class="table table-bordered">
        <thead>
          <tr><th>User</th><th>Member of</th></tr>
        </thead>
        <tbody>
          <tr><td>User2</td><td>Group2</td></tr>
        </tbody>
      </table><br>
      <table class="table table-bordered">
        <thead>
          <tr><th>Policy</th><th>Name</th><th>Users</th><th>Cloud Applications</th><th>Access</th></tr>
        </thead>
        <tbody>
          <tr><td>Policy 1</td><td>Allow SharePoint Access</td><td>Group2</td><td>SharePoint Online</td><td>Grant Access</td></tr>
        </tbody>
      </table><br>
      Will User2 have access to SharePoint Online?`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: true },
        { code: "B", content: "No", correct: false },
      ],
      explanation:
        "User2 is only a member of Group2, which has a policy that grants access. No blocking policy applies. Therefore, User2 will have access to SharePoint Online.",
      category: "Microsoft Entra / Conditional Access",
    },
    {
      code: "Q2198899",
      content: `You are verifying Conditional Access enforcement for SharePoint Online.<br><br>
      <table class="table table-bordered">
        <thead>
          <tr><th>User</th><th>Member of</th></tr>
        </thead>
        <tbody>
          <tr><td>User3</td><td>Group1</td></tr>
        </tbody>
      </table><br>
      <table class="table table-bordered">
        <thead>
          <tr><th>Policy</th><th>Name</th><th>Users</th><th>Cloud Applications</th><th>Access</th></tr>
        </thead>
        <tbody>
          <tr><td>Policy 2</td><td>Block SharePoint Access</td><td>Group1</td><td>SharePoint Online</td><td>Block Access</td></tr>
        </tbody>
      </table><br>
      Will User3 have access to SharePoint Online?`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "User3 is a member of Group1, which is targeted by a Conditional Access policy that blocks access to SharePoint Online. No allow policy applies, so User3 will not have access.",
      category: "Microsoft Entra / Conditional Access",
    },
    {
      code: "Q10",
      content: `You need to determine access for a user not included in any Conditional Access groups.<br><br>
      <table class="table table-bordered">
        <thead>
          <tr><th>User</th><th>Member of</th></tr>
        </thead>
        <tbody>
          <tr><td>User4</td><td>–</td></tr>
        </tbody>
      </table><br>
      Policies only apply to Group1 and Group2 users.<br><br>
      Will User4 have access to SharePoint Online?`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: true },
        { code: "B", content: "No", correct: false },
      ],
      explanation:
        "User4 is not part of any group targeted by Conditional Access policies. If no policy is applied, access is granted by default. Therefore, User4 will have access to SharePoint Online.",
      category: "Microsoft Entra / Conditional Access",
    },
    {
      code: "Q19991",
      content: `You manage your company’s user identities in Microsoft Entra ID.<br><br>
      The security team wants to enable the automatic verification of access attempts based on the user, device and application type, or the requestor’s location to allow or deny access to your company data and applications.<br><br>
      You need to enable conditional access policies to meet your security team’s requirements.<br><br>
      Is the following statement true?<br><br>
      <strong>Conditional access policies are enforced as a first-factor authentication method.</strong>`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "Conditional access policies are not enforced as a first-factor authentication method. They are evaluated after first-factor authentication has been completed, using signals from the sign-in process to determine whether access should be granted or not.",
      category: "Microsoft Entra / Conditional Access",
    },
    {
      code: "Q19998852",
      content: `You are working with Microsoft Entra ID Conditional Access policies.<br><br>
       The security team wants to enable the automatic verification of access attempts based on the user, device and application type, or the requestor’s location to allow or deny access to your company data and applications.<br><br>
      You need to enable conditional access policies to meet your security team’s requirements.<br><br>
      Is the following statement true?<br><br>
      <strong>Early-bound policy enforcement occurs after the user signs into the calling app.</strong>`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "Early-bound policy enforcement does not occur after the user signs into the calling app. It requires a dependent service policy to be satisfied before access is granted to the calling app. For example, a user must meet SharePoint or Exchange policy requirements before accessing Microsoft Teams.",
      category: "Microsoft Entra / Conditional Access",
    },
    {
      code: "Q189983",
      content: `You are working with Microsoft Entra ID Conditional Access.<br><br> The security team wants to enable the automatic verification of access attempts based on the user, device and application type, or the requestor’s location to allow or deny access to your company data and applications.<br><br>
      You need to enable conditional access policies to meet your security team’s requirements.<br><br>
      Is the following statement true?<br><br>
      <strong>You can enable a conditional policy in report-only mode.</strong>`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: true },
        { code: "B", content: "No", correct: false },
      ],
      explanation:
        "You can enable a conditional policy in report-only mode. This mode allows you to evaluate the potential impact of policies without enforcing them. It logs outcomes so you can verify whether controls were applied as expected.",
      category: "Microsoft Entra / Conditional Access",
    },

    {
      code: "Q14",
      content: `Your company has a Microsoft Entra tenant. You use conditional access policies to manage access to your corporate data and applications based on user and device identity signals.<br><br>
      A new hire in the security team requires access to Microsoft Entra ID to modify the conditional access policies using Microsoft Graph PowerShell SDK.<br><br>
      You need to assign them a relevant Microsoft Entra role. Role assignment should adhere to the principle of least privilege.<br><br>
      Which role should you assign them?`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Conditional Access Administrator",
          correct: true,
        },
        { code: "B", content: "Security Reader", correct: false },
        { code: "C", content: "Security Operator", correct: false },
        { code: "D", content: "Global Administrator", correct: false },
      ],
      explanation:
        "You should assign the Conditional Access Administrator role. It allows the user to read and write conditional access policies and adheres to the principle of least privilege. Other roles like Global Administrator provide broader access, which is unnecessary and less secure for this task.",
      category: "Microsoft Entra / Role-Based Access Control",
    },
    {
      code: "Q15",
      content: `You are a consultant in CompanyA. CompanyA has Microsoft 365 Business Premium licenses.<br><br>
      You have been assigned the Global administrator role and you realize that you are unable to use Conditional Access. You are informed that the Microsoft 365 tenant is brand new.<br><br>
      What should you do to enable Conditional Access?`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Buy Microsoft Entra ID P2 licenses.",
          correct: false,
        },
        { code: "B", content: "Turn off security defaults.", correct: true },
        { code: "C", content: "Create a support request.", correct: false },
        {
          code: "D",
          content: "Ask for the Conditional Access administrator role.",
          correct: false,
        },
      ],
      explanation:
        "You should turn off security defaults. New tenants have security defaults enabled by default, which conflicts with enabling Conditional Access policies. Microsoft 365 Business Premium already includes the necessary licensing.",
      category: "Microsoft Entra / Conditional Access",
    },
    {
      code: "Q16",
      content: `You are the administrator for your company. Your company has purchased Microsoft 365 E5 licenses for all users.<br><br>
      You need to configure risk-based access to specific cloud apps.<br><br>
      What should you do?`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Create a Conditional Access policy.",
          correct: true,
        },
        {
          code: "B",
          content:
            "Enable the user risk policy in Microsoft Entra ID Protection.",
          correct: false,
        },
        { code: "C", content: "Enable Security defaults.", correct: false },
        {
          code: "D",
          content:
            "Enable the sign-in risk policy in Microsoft Entra ID Protection.",
          correct: false,
        },
      ],
      explanation:
        "You should create a Conditional Access policy. It allows you to apply sign-in risk or user-risk conditions to specific cloud apps. Risk policies alone apply broadly and lack per-app granularity.",
      category: "Microsoft Entra / Conditional Access",
    },
    {
      code: "Q18",
      content: `You work as part of a Cloud Support team for an organization that has an existing Microsoft Entra tenant and uses Microsoft 365 Software-as-a-Service (SaaS) applications, including Exchange Online, SharePoint Online, OneDrive, Teams, and Office 365 apps.<br><br>
      As part of ongoing tenant security improvements, your manager has asked you to implement continuous access evaluation (CAE) to review access to the SaaS applications currently in use in the organization. Multiple versions of Office applications are used within the organization and they are accessed from different device types, as shown in the following table:<br><br>
      <table class="table table-bordered">
        <thead>
          <tr><th>Office App</th><th>Device Type</th></tr>
        </thead>
        <tbody>
          <tr><td>Outlook</td><td>iOS</td></tr>
          <tr><td>Outlook</td><td>Android</td></tr>
          <tr><td>Office Apps (Web)</td><td>Any</td></tr>
          <tr><td>Office Apps (win32)</td><td>Windows</td></tr>
          <tr><td>OneDrive</td><td>Mac</td></tr>
        </tbody>
      </table><br>
      Before implementing CAE, you need to understand which Office app and SaaS application combinations are supported in order to consolidate the Office app versions.<br><br>
      Which three combinations of Office app and SaaS apps support CAE? Each correct answer presents a complete solution.`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Office Apps (win32) on Windows and SharePoint Online",
          correct: true,
        },
        {
          code: "B",
          content: "Office web Apps and SharePoint Online",
          correct: false,
        },
        {
          code: "C",
          content: "Outlook on Android and Exchange Online",
          correct: true,
        },
        {
          code: "D",
          content: "Outlook on iOS and Exchange Online",
          correct: true,
        },
        {
          code: "E",
          content: "OneDrive on Mac and SharePoint Online",
          correct: false,
        },
      ],
      explanation:
        "Continuous Access Evaluation (CAE) is a Microsoft Entra ID feature that allows access tokens to be revoked based on critical events and policy evaluation rather than relying on token expiry based on lifetime.<br><br>The combination of Outlook on iOS and Exchange Online is supported and can integrate with CAE. For the purpose of evaluation, you can synchronize key conditional access policies that integrate with Outlook on iOS devices and Exchange on Android devices.<br><br>The combination of Outlook on Android and Exchange Online is supported and can integrate with CAE. You can synchronize key conditional access policies that integrate with Outlook and Exchange Online on Android devices for evaluation.<br><br>The combination of Office Apps (win32) on Windows and SharePoint Online is supported and can integrate with CAE. You can synchronize key conditional access policies that integrate with Office Apps (win32) and SharePoint Online on Windows devices for evaluation.<br><br>The combination of Office web Apps and SharePoint Online or Exchange Online is not supported and cannot integrate with CAE.<br><br>The combination of OneDrive on Mac and SharePoint Online is not supported and cannot integrate with CAE.",
      category: "Microsoft Entra / Continuous Access Evaluation",
    },
    {
      code: "Q19",
      content: `You work in the support team for a company that has an existing Microsoft Entra tenant and that uses Conditional Access policies to control access to corporate resources hosted in Microsoft Cloud.<br><br>
      You are configuring a conditional access policy to implement application enforced restrictions on multiple cloud apps, including Exchange Online and SharePoint Online. You set the policy to apply to all cloud apps. When you get to the Session tab in the policy, the Use app-enforced restrictions option is grayed out.<br><br>
      You need to configure the policy so that it is possible to set this option, making sure that you follow Microsoft best practices for the configuration.<br><br>
      What setting should you configure within the policy to allow this setting to be selected?`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Exclude your own account in the Assignments section.",
          correct: false,
        },
        {
          code: "B",
          content:
            "Specify Require multi-factor authentication in the Access control section.",
          correct: false,
        },
        {
          code: "C",
          content: "Include all users in the Assignments section.",
          correct: false,
        },
        {
          code: "D",
          content:
            "Specify Exchange Online and SharePoint Online in the Cloud apps or actions section.",
          correct: true,
        },
      ],
      explanation:
        "You should specify Exchange Online and SharePoint Online in the Cloud apps or actions section. This control only works when you specify supported apps. Currently, Office 365, Exchange Online, and SharePoint Online are the only cloud apps that support app enforced restrictions.<br><br>You do not need to specify Require multi-factor authentication in the Access control section. Although having this setting enabled is a good practice, it is not a requirement to allow the Use app-enforced restrictions option to be selected.<br><br>You do not need to include all users in the Assignments section. Including all users would apply the policy to admins, service accounts, and break-glass accounts, which is not aligned with Microsoft best practices.<br><br>You do not need to exclude your own account in the Assignments section. This would only exempt you from the policy but not enable the Use app-enforced restrictions setting.",
      category: "Microsoft Entra / Conditional Access",
    },
    {
      code: "Q20",
      content: `Your organization has an existing Microsoft 365 tenant. The following end-user devices have been onboarded into your tenant:<br><br>
      <table class="table table-bordered">
        <thead>
          <tr><th>Device Name</th><th>Operating System</th><th>Join Type</th><th>Device Location</th></tr>
        </thead>
        <tbody>
          <tr><td>DeviceA</td><td>Windows 10 20H2</td><td>Microsoft Entra Registered</td><td>User's Home</td></tr>
          <tr><td>DeviceD</td><td>Windows 10 20H2</td><td>Hybrid Microsoft Entra</td><td>UK Office</td></tr>
          <tr><td>DeviceF</td><td>Windows 11</td><td>Microsoft Entra Registered</td><td>Italy Office</td></tr>
          <tr><td>DeviceC</td><td>Windows 10 22H2</td><td>Microsoft Entra Registered</td><td>Italy Office</td></tr>
          <tr><td>DeviceB</td><td>Windows 11</td><td>Hybrid Microsoft Entra</td><td>UK Office</td></tr>
          <tr><td>DeviceE</td><td>Windows 11</td><td>Hybrid Microsoft Entra</td><td>UK Office</td></tr>
        </tbody>
      </table><br>
      You set up a conditional access policy as shown in the exhibits. The support desk receives complaints that users are unable to access cloud resources due to MFA registration failing.<br><br>
      You need to report which of the new devices have been blocked from accessing cloud resources.<br><br>
      Which three devices does the Conditional Access policy block from accessing cloud resources? Each correct answer presents part of the solution.`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "DeviceA", correct: true },
        { code: "B", content: "DeviceF", correct: true },
        { code: "C", content: "DeviceC", correct: true },
        { code: "D", content: "DeviceB", correct: false },
        { code: "E", content: "DeviceE", correct: false },
        { code: "F", content: "DeviceD", correct: false },
      ],
      explanation:
        "The Conditional Access policy is configured to allow access only to devices that are Hybrid Microsoft Entra joined and located in the UK Office. Devices A, C, and F are Microsoft Entra Registered and located outside the UK Office, so they are blocked by the policy.<br><br>Devices B, D, and E meet the access requirements and are granted access.",
      category: "Microsoft Entra / Conditional Access",
    },
    {
      code: "Q21",
      content: `You are an IT consultant for a company that has an existing Microsoft 365 tenant and that uses Microsoft Entra ID to manage identity and access management. The company has recently had a number of incidents related to users changing their password and losing access to Microsoft 365 services for a short period of time.<br><br>
      Users have reported this issue with the following apps and services:<br><br>
      <table class="table table-bordered">
        <thead>
          <tr><th>User Name</th><th>Service and App</th></tr>
        </thead>
        <tbody>
          <tr><td>UserA</td><td>SharePoint Online with Office for Mac</td></tr>
          <tr><td>UserB</td><td>Exchange Online with Outlook for Mac</td></tr>
          <tr><td>UserC</td><td>Exchange Online with Outlook for Android</td></tr>
          <tr><td>UserD</td><td>SharePoint Online with OneDrive for Mac</td></tr>
        </tbody>
      </table><br>
      You recommend implementing Continuous Access Evaluation to ensure that user session revocation enforcement is in near real time, which will mitigate these types of issues when users change their passwords.<br><br>
      You need to ensure that the service and apps with issues in the table support Continuous Access Evaluation before being deployed.<br><br>
      Which service and app will have an issue when deploying Continuous Access Evaluation?`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "SharePoint Online with OneDrive for Mac",
          correct: true,
        },
        {
          code: "B",
          content: "SharePoint Online with Office for Mac",
          correct: false,
        },
        {
          code: "C",
          content: "Exchange Online with Outlook for Android",
          correct: false,
        },
        {
          code: "D",
          content: "Exchange Online with Outlook for Mac",
          correct: false,
        },
      ],
      explanation: `The service and app that will have an issue when deploying Continuous Access Evaluation is SharePoint Online with OneDrive for Mac. The following table shows the support matrix for Continuous Access Evaluation Conditional Access policies:<br><br>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th></th>
              <th>Office for Mac</th>
              <th>Outlook for Mac</th>
              <th>Outlook for Android</th>
              <th>OneDrive for Mac</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SharePoint Online</td>
              <td>Supported</td>
              <td>-</td>
              <td>-</td>
              <td>Not Supported</td>
            </tr>
            <tr>
              <td>Exchange Online</td>
              <td>-</td>
              <td>Supported</td>
              <td>Supported</td>
              <td>-</td>
            </tr>
          </tbody>
        </table><br>
        In the given scenario, the Continuous Access Evaluation will not solve the issue for UserD, as they face issues with a service and app that is not supported by the policies.`,
      category: "Microsoft Entra / Continuous Access Evaluation",
    },
    {
      code: "Q22",
      content: `Your company uses Microsoft Entra as its identity and access management solution.<br><br>
      A recent policy change allows the 2nd Line Support team’s admin accounts to apply Windows provisioning packages during the re-provisioning of corporate-owned devices. This process joins devices to Microsoft Entra ID and enrolls them in Intune for management.<br><br>
      There are four members of the team as shown in the table below:<br><br>
      <table class="table table-bordered">
        <thead>
          <tr><th>Username</th><th>Group Association</th><th>Default Admin Privilege</th></tr>
        </thead>
        <tbody>
          <tr><td>Admin-01</td><td>AdminGroupA</td><td>Global Reader</td></tr>
          <tr><td>Admin-02</td><td>AdminGroupD</td><td>Password Administrator</td></tr>
          <tr><td>Admin-03</td><td>AdminGroupC</td><td>People Administrator</td></tr>
          <tr><td>Admin-04</td><td>AdminGroupB</td><td>Intune Administrator</td></tr>
        </tbody>
      </table><br>
      Admin-01 and Admin-03 report that they encounter a permissions error when attempting to apply provisioning packages during device re-provisioning.<br><br>
      You need to update the configuration to ensure both users are able to successfully apply Windows provisioning packages that join devices to Microsoft Entra ID and enroll them into Intune. Your solution should minimize administrative effort and adhere to the principle of least privilege.<br><br>
      What should you do?`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Add Admin-01 and Admin-03 to the AdminGroupD.",
          correct: true,
        },
        {
          code: "B",
          content: "Add Admin-01 and Admin-03 to the AdminGroupB.",
          correct: false,
        },
        {
          code: "C",
          content: "Add Admin-01 and Admin-03 to the AdminGroupA.",
          correct: false,
        },
        {
          code: "D",
          content: "Add Admin-01 and Admin-03 to the AdminGroupC.",
          correct: false,
        },
      ],
      explanation:
        "You should add Admin-01 and Admin-03 to AdminGroupD. The Password Administrator role provides the necessary permissions to join devices to Microsoft Entra ID and enroll them in Intune using Windows provisioning packages. This aligns with the task requirements and follows the principle of least privilege.<br><br>You should not add them to AdminGroupA (Global Reader) as it does not allow device changes, nor to AdminGroupB (Intune Administrator) because it grants too broad permissions. AdminGroupC (People Administrator) is also insufficient for managing device configurations and provisioning packages.",
      category: "Microsoft Entra / Role-Based Access Control",
    },
    {
      code: "Q23",
      content: `You manage a Microsoft Entra ID environment in your organization. You are requested to enforce more stringent access conditions to access SharePoint sites.<br><br>
      You need to accomplish the task.<br><br>
      What should you implement?`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content:
            "Microsoft Entra Conditional Access policy and device compliance.",
          correct: false,
        },
        {
          code: "B",
          content:
            "Microsoft Entra Conditional Access policy and multifactor authentication (MFA).",
          correct: false,
        },
        {
          code: "C",
          content:
            "Microsoft Entra Conditional Access policy and authentication contexts.",
          correct: true,
        },
        {
          code: "D",
          content:
            "Microsoft Entra Conditional Access policy and trusted locations.",
          correct: false,
        },
      ],
      explanation:
        "You should implement Microsoft Entra Conditional Access policy and authentication contexts. Authentication contexts allow you to apply different conditional access policies to specific resources like SharePoint sites, enabling more granular control over access based on the context of the request.<br><br>You should not implement Microsoft Entra Conditional Access policy and trusted locations. This option focuses on restricting access based on location but does not provide the granular control needed for varying conditions on specific sites.<br><br>You should not implement Microsoft Entra Conditional Access policy and device compliance. While device compliance is important for security, it does not directly address the need for more stringent access controls specific to SharePoint sites.<br><br>You should not implement Microsoft Entra Conditional Access policy and multifactor authentication (MFA). MFA enhances security but is a broader control. It does not offer the same level of specificity as authentication contexts for enforcing access conditions on particular resources like SharePoint.",
      category: "Microsoft Entra / Conditional Access",
    },
    {
      code: "Q24",
      content: `As a security architect in your organization, you have been asked to enhance security in your Microsoft Entra ID environment.<br><br>
  You need to ensure that certain actions are protected with additional layers, regardless of the user role.<br><br>
  Which feature should you implement to achieve this?`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Privileged Identity Management (PIM) role activation.",
          correct: false,
        },
        {
          code: "B",
          content: "Cross-tenant access settings management",
          correct: false,
        },
        {
          code: "C",
          content: "Protected actions with Conditional Access policies.",
          correct: true,
        },
        {
          code: "D",
          content: "Conditional Access sign-in frequency session controls.",
          correct: false,
        },
      ],
      explanation:
        "You should implement protected actions with Conditional Access policies. Protected actions apply Conditional Access policies to specific high-impact permissions, adding an extra layer of security that is independent of user roles. For example, when an administrator tries to carry out a protected action, they first need to satisfy the Conditional Access policies tied to those permissions. Likewise, if you want administrators to update Conditional Access policies, you can make sure they complete the Phishing-resistant MFA policy first.<br><br>You should not implement Privileged Identity Management (PIM) role activation. PIM role activation does allow for Conditional Access policies to be applied when a user activates a role, but it does not apply to specific actions outside of role activation. Protected actions provide security for specific actions, independent of roles.<br><br>You should not implement Conditional Access sign-in frequency session controls. While sign-in frequency session controls are useful for managing session timeouts, they do not provide the action-specific protection that protected actions offer.<br><br>You should not implement Cross-tenant access settings management. Cross-tenant access settings are related to managing access across different tenants, not specifically adding protection to high-impact actions within a tenant.",
      category: "Microsoft Entra / Conditional Access",
    },
    {
      code: "Q25",
      content: `You are an identity administrator at a small start-up company that has just started using Azure. You are planning to implement Microsoft Entra ID for your cloud infrastructure, services, and storage. The company will store sensitive data in its cloud storage, and management wants to make sure that only authorized users can access the data.<br><br>
      You need to mitigate the risk of unauthorized users gaining access to sensitive data stored in the company’s cloud storage.<br><br>
      Which three Microsoft Entra ID features should you use? Each correct answer presents part of the solution.`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "ID Protection", correct: true },
        { code: "B", content: "Threat intelligence", correct: false },
        { code: "C", content: "Entity behavior", correct: false },
        { code: "D", content: "Password Protection", correct: true },
        { code: "E", content: "Smart lockout", correct: true },
        { code: "F", content: "Risky users report", correct: false },
      ],
      explanation:
        "You should use identity protection. Microsoft Entra ID Protection helps protect your organization's identities by configuring risk-based policies. These policies can then automatically respond to risky behaviors by denying access, prompting multi-factor authentication (MFA), requiring password changes, or logging the event for further evaluation.<br><br>You should also use password protection. Microsoft Entra Password Protection allows you to create a custom banned password list that includes common words, brand names, product names, organization-specific terms, and more. This custom banned password list is combined with the Azure managed and updated global banned password list and automatically rejects passwords that are on this list for all users in a Microsoft Entra tenant.<br><br>You should also use smart lockout. Microsoft Entra smart lockout can recognize guessing, brute-force attacks, and unknown sources, and it can automatically lock an account if it recognizes a threat. Every subsequent failed sign-in attempt that is recognized will be met with a longer lockout period.<br><br>You should not use entity behavior. Entity behavior is an analytics feature of Microsoft Sentinel. It analyzes logs and alerts from connected data sources and builds a baseline behavioral profile. It is not a feature of Microsoft Entra ID and it does not allow for automatic mitigation.<br><br>You should not use the risky users report. This is a generated report available in Microsoft Entra ID Security that lists users identified as risky. However, the report does not automatically mitigate the risk associated with risky users.<br><br>You should not use threat intelligence. Threat intelligence information can be imported into Microsoft Sentinel to provide context for analytics, hunting, and notebooks and this information can be used to generate security alerts. However, threat intelligence is not a feature of Microsoft Entra ID.",
      category: "Microsoft Entra / Identity Protection",
    },
    {
      code: "Q26",
      content: `Your company has a Microsoft Entra tenant with a Microsoft Entra ID P2 license. You use ID Protection to configure risk policies.<br><br>
      You need to determine what risk type each of the following risk detections represent. To answer, select the appropriate options in the answer area.<br><br>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Detection</th>
            <th>Risk Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Anonymous IP address</td>
            <td>?</td>
          </tr>
          <tr>
            <td>Leaked credentials</td>
            <td>?</td>
          </tr>
          <tr>
            <td>Malicious IP address</td>
            <td>?</td>
          </tr>
        </tbody>
      </table>`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Sign-in risk, User risk, Sign-in risk",
          correct: true,
        },
        {
          code: "B",
          content: "User risk, User risk, Sign-in risk",
          correct: true,
        },
        {
          code: "C",
          content: "Sign-in risk, Sign-in risk ,Sign-in risk  ",
          correct: false,
        },
        { code: "D", content: "None of the above", correct: false },
      ],
      explanation:
        "An anonymous IP address is an example of a sign-in risk. Sign-in risks represent the probability that specific authentication requests are not authorized by end users. In the case of an anonymous IP address, it may be an indication that someone tries to hide their IP addresses using a browser or an anonymous VPN for a potentially malicious intent.<br><br>Leaked credentials is an example of a user risk. User risks represent the probability that specific identities are compromised. Enabling password hash synchronization (PHS) from on-premises Active Directory to Microsoft Entra ID enables the detection of leaked credentials through the analysis of postings on public paste sites and the dark web that match your users.<br><br>A malicious IP address is also an example of a sign-in risk. An IP address may be classified as malicious based on the history of invalid credentials received from it in the past or based on the assessments from external IP reputation analysis sources.",
      category: "Microsoft Entra / Identity Protection",
    },
    {
      code: "Q27",
      content: `You work as an administrator for Company1. One of your colleagues notifies you that they cannot sign in to Microsoft 365.<br><br>
      In the sign-in logs for the specific user, you see that the sign-in has been blocked based on user risk. You also verify that this is based on a false positive and the user risk is high for no valid reason.<br><br>
      What should you do to lower the risk score and unblock the user from signing in?`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content:
            "From the user properties in Microsoft Entra, under authentication methods, click the require re-register MFA button.",
          correct: false,
        },
        {
          code: "B",
          content:
            "From the Microsoft Entra Security page, on the Risky users report, dismiss the user risk.",
          correct: true,
        },
        {
          code: "C",
          content:
            "From the Microsoft Entra Security page, under Identity Protection, disable the user risk policy.",
          correct: false,
        },
        {
          code: "D",
          content:
            "From the user properties in Microsoft Entra, uncheck the Block for sign-in check box.",
          correct: false,
        },
      ],
      explanation:
        "You should dismiss the user risk on the Risky users report of the Microsoft Entra Security page. This will reset the user risk to a lower state, allowing the user to sign in.<br><br>You should not uncheck the Block for sign-in check box on the user properties in Microsoft Entra. Since the sign-in was blocked based on the user risk policy, this will not remediate the problem. When a sign-in is blocked by the user risk policy, the Block for sign-in check box will not be altered and the user is still allowed to sign in based on the properties of the user account. Once the risk factor has been eliminated, a normal sign-in will be possible.<br><br>You should not disable the User risk policy under Identity Protection on the Microsoft Entra Security page. Although this will make sure the user can sign in, this will disable the policy for all active users, imposing a security risk. The best option would be to dismiss the user risk for this specific user, since this will not impact all other users in your environment.<br><br>You should not click the Require re-register MFA button under authentication methods in the user properties in Microsoft Entra. This will force the user to re-register their multi-factor authentication (MFA) settings, such as their authenticator app or mobile phone number. Although this might be a good idea to do when a user’s credentials have been compromised, this will not reset the risk state for this user and therefore will not enable the user to sign in again.",
      category: "Microsoft Entra / Identity Protection",
    },
    {
      code: "Q28",
      content: `You are the Global Administrator of your company. Your company uses Microsoft Entra ID and has Microsoft Entra ID P2 licensing enabled for all users. All users are registered for self-service password reset (SSPR).<br><br>
      During a security audit, it has become apparent that users are reusing passwords and account names for third-party services.<br><br>
      You need to ensure that all users are required to change their password if a high-risk detection is made by the Identity Protection service. You must use the least administrative effort.<br><br>
      Which policy should you configure?`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Multi-Factor Authentication (MFA) registration policy",
          correct: false,
        },
        { code: "B", content: "SSPR administrator policy", correct: false },
        { code: "C", content: "User-risk remediation policy", correct: true },
        {
          code: "D",
          content: "Sign-in risk remediation policy",
          correct: false,
        },
      ],
      explanation:
        "You should configure a user risk remediation policy. This option is available in the Identity Protection service that comes with the Microsoft Entra ID P2 license and has an option that requires a password change should a selected risk level be detected on a user. In this case, a high-risk should be selected.<br><br>You should not configure a sign-in risk remediation policy. This policy type does not allow for password change, only Multi-Factor Authentication (MFA).<br><br>You should not configure a MFA registration policy. This policy only governs the enablement of MFA, not the option to force a password change based on risk levels.<br><br>You should not configure an SSPR administrator policy. The SSPR Administrator policy only governs what methods are required to reset an administrator’s password.",
      category: "Microsoft Entra / Identity Protection",
    },
    {
      code: "Q29",
      content: `You are the Global Administrator for CompanyA. CompanyA uses Microsoft 365 and has a Microsoft Business 365 Basic and an Exchange Online (Plan 2) license.<br><br>
      You need to investigate user sign-in activity from May 8, 2023. You purchase Microsoft Entra ID Premium P2 for all users on May 16, 2023.<br><br>
      Is the following statement true?<br><br>
      <strong>On May 19, 2023, you are able to view sign-in logs recorded on May 8, 2023.</strong>`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "On May 19, 2023, you are not able to view sign-in logs recorded on May 8, 2023. Switching from Microsoft Entra ID Free to a Premium tier (P1 or P2) can take up to three days to take effect and you would not be able to go back further than seven days from the point that the premium tier is activated.",
      category: "Microsoft Entra / Licensing & Monitoring",
    },
    {
      code: "Q30",
      content: `You are the Global Administrator for CompanyA. CompanyA uses Microsoft 365 and has a Microsoft Business 365 Basic and an Exchange Online (Plan 2) license.<br><br>
      You need to investigate user sign-in activity from May 8, 2023. You purchase Microsoft Entra ID Premium P2 for all users on May 16, 2023.<br><br>
      Is the following statement true?<br><br>
      <strong>On May 16, 2023, you are able to access the sign-in logs from May 8, 2023.</strong>`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "On May 16, 2023, you will not be able to access the sign-in logs from May 8, 2023. Switching from Microsoft Entra ID Free to a Premium tier (P1 or P2) can take up to three days to take effect. In any case, you would not be able to go back further than seven days and must be aware that not even Microsoft Support can go that far back.",
      category: "Microsoft Entra / Licensing & Monitoring",
    },
    {
      code: "Q31",
      content: `You are the Global Administrator for CompanyA. CompanyA uses Microsoft 365 and has a Microsoft Business 365 Basic and an Exchange Online (Plan 2) license.<br><br>
      You purchase Microsoft Entra ID Premium P2 for all users on May 16, 2023.<br><br>
      Is the following statement true?<br><br>
      <strong>Microsoft Defender for Cloud Apps can be used for Discovery and Risk assessments.</strong>`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: true },
        { code: "B", content: "No", correct: false },
      ],
      explanation:
        "You can use Microsoft Defender for Cloud Apps for Discovery and Risk assessments. Microsoft Entra ID P1 and P2 include a limited version of Microsoft Defender for Cloud Apps that can be used for Discovery and Risk Assessment capabilities.",
      category: "Microsoft Entra / Defender for Cloud Apps",
    },
    {
      code: "Q32",
      content: `You are the administrator of your company. You are implementing Microsoft Entra ID Protection.<br><br>
      You need to explore the different ways of remediating risk.<br><br>
      Is the following statement true?<br><br>
      <strong>Administrators can close risk detections for a user with a manual password reset.</strong>`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: true },
        { code: "B", content: "No", correct: false },
      ],
      explanation:
        "Administrators can close risk detections for a user with a manual password reset. Administrators are given two options when resetting a password for their users: generate a temporary password, or require the user to reset their password. This will remediate risk detections.",
      category: "Microsoft Entra / Identity Protection",
    },
    {
      code: "Q33",
      content: `You are the administrator of your company. You are implementing Microsoft Entra ID Protection.<br><br>
      You need to explore the different ways of remediating risk.<br><br>
      Is the following statement true?<br><br>
      <strong>Administrators can close individual risk detections manually.</strong>`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: true },
        { code: "B", content: "No", correct: false },
      ],
      explanation:
        "Administrators can close individual risk detections manually. When administrators click on Dismiss user risk, all events are closed and the affected user is no longer at risk. It is important to note that this action does not bring the related identity back into a safe state because it has no impact on the user's password.",
      category: "Microsoft Entra / Identity Protection",
    },
    {
      code: "Q34",
      content: `You are the administrator of your company. You are implementing Microsoft Entra ID Protection.<br><br>
      You need to explore the different ways of remediating risk.<br><br>
      Is the following statement true?<br><br>
      <strong>Users can self-remediate their user risk with Microsoft Entra multi-factor authentication (MFA).</strong>`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "Users cannot self-remediate their user-risk with Microsoft Entra multi-factor authentication (MFA). Only sign-in risks can be self-remediated with Microsoft Entra MFA.",
      category: "Microsoft Entra / Identity Protection",
    },
    {
      code: "Q35",
      content: `You are the administrator of your company. You are implementing Microsoft Entra ID Protection.<br><br>
      You need to explore the different ways of remediating risk.<br><br>
      Is the following statement true?<br><br>
      <strong>Users can self-remediate their user risk with self-service password reset (SSPR).</strong>`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: true },
        { code: "B", content: "No", correct: false },
      ],
      explanation:
        "Users can self-remediate their user-risk with self-service password reset (SSPR). Administrators can configure the user risk policy in Identity Protection or Conditional Access in order to enforce password reset at a specific level of user risk. Requiring the users to reset passwords enables self-recovery without having to contact a help desk or an administrator.",
      category: "Microsoft Entra / Identity Protection",
    },
    {
      code: "Q36",
      content: `You are the Microsoft 365 administrator of CompanyA. CompanyA uses Microsoft Entra ID Protection to protect its hybrid identities.<br><br>
      You have configured a new Conditional Access policy for risk-based access to Office 365 apps, as shown in the exhibit. Sign-in of users connected via VPN is wrongly flagged as risky and reported to the IT service desk.<br><br>
      You need to reduce the amount of these wrongly-flagged sign-ins while ensuring users stay protected by the risk-based access policy.<br><br>
      What should you do?`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Add No risk to the risk level in the policy.",
          correct: false,
        },
        {
          code: "B",
          content:
            "Add the IP address ranges from the VPN to the Named locations and mark them as trusted.",
          correct: true,
        },
        {
          code: "C",
          content: "Set the policy to report-only.",
          correct: false,
        },
        {
          code: "D",
          content: "Exclude the users from the policy.",
          correct: false,
        },
      ],
      explanation:
        "You should configure Trusted Named Locations. By adding the IP address ranges from the VPN to the Named locations and marking them as trusted, Microsoft Entra ID Protection will improve the accuracy of risk detections.<br><br>You should not exclude the users from the policy. By excluding the users from the policy, risk-based access is completely turned off for those users.<br><br>You should not set the policy to report-only. Setting the policy to report-only does not reduce false positives. This will in fact prevent the policy from triggering the configured access controls, such as requiring multi-factor authentication (MFA).<br><br>You should not add No risk to the risk level in the policy. This will cause the policy to act on more risk levels, including sign-ins with no risk, but will not reduce the amount of false-positives for your VPN users.",
      category: "Microsoft Entra / Conditional Access",
    },
    {
      code: "Q37",
      content: `You work for a company that has an existing Microsoft Entra tenant with Microsoft Entra ID P2 licenses provisioned for all users. The company uses Conditional Access policies to control user access to resources within the Microsoft 365 tenant and to enforce multi-factor authentication (MFA).<br><br>
      You need to grant several applications and service principals access to data that is stored within the tenant and you decide to use Conditional Access policies for workload identities rather than traditional Conditional Access policies for user accounts.<br><br>
      What are the three main differences between workload identities and traditional user accounts? Each correct answer presents a complete solution.`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content:
            "Workload identities cannot perform multi-factor authentication (MFA).",
          correct: true,
        },
        {
          code: "B",
          content:
            "Workload identity credentials and secrets need to be stored somewhere.",
          correct: true,
        },
        {
          code: "C",
          content:
            "User account credentials and secrets need to be stored somewhere.",
          correct: false,
        },
        {
          code: "D",
          content:
            "Workload identities do not support role-based access control (RBAC).",
          correct: false,
        },
        {
          code: "E",
          content: "Workload identities have no formal lifecycle process.",
          correct: true,
        },
      ],
      explanation:
        "A workload identity is used by an application, service, script, or container workload to authenticate and access cloud services. Workload identities are much harder to manage than traditional user identities, which means they are at a much higher risk of being compromised. Workload identities and user accounts have the following differences:<br><br>• Workload identities cannot perform multi-factor authentication (MFA), but user accounts can.<br>• Workload identities have no formal lifecycle process, but user accounts do.<br>• Workload identity credentials and secrets need to be stored somewhere, whereas Microsoft Entra ID stores user account passwords.<br><br>Both user accounts and workload identities support role-based access control (RBAC) as service principals are an example of workload identities which can be secured using RBAC.",
      category: "Microsoft Entra / Workload Identities",
    },
    {
      code: "Q38",
      content: `Your company hosts its cloud services in Microsoft 365 and uses Microsoft Entra ID to manage access to these services.<br><br>
      You implement Risk-User conditional access policies as part of the Identity Protection service to mitigate issues with compromised accounts and give you more insight into risks within the environment. You are asked to provide further details regarding two users: UserA and UserB.<br><br>
      You need to create an app registration to integrate Microsoft Graph with Microsoft Identity Protection.<br><br>
      Which three APIs should you use? Each correct answer presents part of the solution.`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "RiskyUsers", correct: true },
        { code: "B", content: "riskServicePrincipals", correct: false },
        { code: "C", content: "signIn", correct: true },
        { code: "D", content: "riskDetection", correct: true },
        { code: "E", content: "servicePrincipalRiskDetection", correct: false },
      ],
      explanation:
        "You should use riskDetection. The riskDetection API will enable you to query Microsoft Graph for a list of user linked detections and sign-in risks detections. This API also gives you information associated with the detections.<br><br>You should also use riskyUsers. This API will enable you to query Microsoft Graph for information about users where Identity Protection has alerted as being risky.<br><br>You should also use signIn. This API enables you to query Microsoft Graph for information on Microsoft Entra ID sign-ins, where it shows specific information that is related to risk state and level.<br><br>You should not use the servicePrincipalRiskDetection or riskyServicePrincipals APIs, as both are related to querying Microsoft Graph for information regarding Service Principals rather than standard users.",
      category: "Microsoft Entra / Microsoft Graph & Identity Protection",
    },
    {
      code: "Q39",
      content: `Your company uses Microsoft Entra ID and Microsoft Defender for Cloud Apps with a Microsoft 365 E5 license.<br><br>
      There has been an increase in the number of reports regarding the suspicious addition of privileged credentials to apps, which has led to compromised apps.<br><br>
      You need to use Microsoft Entra Identity Protection to identify the suspicious addition of privileged credentials to apps.<br><br>
      Which risk detection should you use?`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "Suspicious Sign-ins", correct: false },
        {
          code: "B",
          content: "Unusual addition of credentials to an OAuth app",
          correct: true,
        },
        {
          code: "C",
          content: "Microsoft Entra threat intelligence",
          correct: false,
        },
        {
          code: "D",
          content: "Admin confirmed account compromised",
          correct: false,
        },
      ],
      explanation:
        "You need to use the Unusual addition of credentials to an OAuth app detection. This detection will send alerts when any suspicious additional of privileged credentials to an OAuth App is detected. This will then mitigate the risk of an attacker compromising your applications and using them for malicious tasks.<br><br>You should not use the Suspicious Sign-ins detection. This detection sends alerts when sign-in properties or patterns that are deemed unusual for a service principal are detected.<br><br>You should not use the Microsoft Entra threat intelligence detection. This detection sends alerts when activity is similar with known attack patterns based on Microsoft's internal and external threat intelligence sources.<br><br>You should not use the Admin confirmed account compromised detection. This detection is triggered when an admin manually confirms an account compromise via UI or API.",
      category: "Microsoft Entra / Identity Protection",
    },
    {
      code: "Q40",
      content: `You are a security specialist who works for an organization that has an existing Microsoft Entra tenant. The company uses role-based access control (RBAC) and custom admin roles to grant administrators granular permissions to resources, following the principle of least privilege access.<br><br>
      Admin-A currently has the Virtual Machine Operator role assigned to them; however, they now need to be able to manage diagnostic settings from virtual machines. Your manager has asked you to grant Admin-A the following action: <code>Microsoft.Insights/diagnosticSettings/*</code><br><br>
      You need to add the action to the existing Virtual Machine Operator role by using PowerShell.<br><br>
      Which cmdlets should you use? To answer, complete the commands by selecting the correct combination.<br><br>
      <pre>$role = <strong>?</strong> "Virtual Machine Operator"<br>
      $role.Actions.Add("Microsoft.Insights/diagnosticSettings/*")<br>
      <strong>?</strong> -Role $role</pre>`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Get-AzRoleDefinition, Set-AzRoleDefinition",
          correct: true,
        },
        {
          code: "B",
          content: "Set-AzRoleDefinition, Get-AzRoleDefinition",
          correct: false,
        },
        {
          code: "C",
          content: "Get-RoleDefinition, Set-RoleDefinition",
          correct: false,
        },
        {
          code: "D",
          content: "Get-AzzRoleDefinition, Set-AzzRoleDefinition",
          correct: false,
        },
      ],
      explanation:
        'You should complete the PowerShell cmdlet as follows:<br><br><code>$role = Get-AzRoleDefinition "Virtual Machine Operator"<br>$role.Actions.Add("Microsoft.Insights/diagnosticSettings/*")<br>Set-AzRoleDefinition -Role $role</code><br><br>You should use the <code>Get-AzRoleDefinition</code> cmdlet in the first line, as this will retrieve the Virtual Machine operator role to which you need to add the new action.<br><br>For the second cmdlet, you should use the <code>Set-AzRoleDefinition</code> as this will modify the existing Virtual Machine Operator role you have chosen with the additional action to allow diagnostic setting access.<br><br>You should not use the <code>New-AzRoleAssignment</code> cmdlet, as this cmdlet assigns a specified role-based access control (RBAC) role to a specified principal at a specified scope.<br><br>You should not use the <code>New-AzRoleDefinition</code> cmdlet, as this cmdlet allows you to create a custom role in Azure RBAC.',
      category: "Azure RBAC / PowerShell Management",
    },
    {
      code: "Q41",
      content: `You are an IT Administrator for an organization that has a Microsoft Entra tenant. The organization uses role-based access control (RBAC) policies to control access to the Azure Key Vault service.<br><br>
      The organization has recently hired four new Cloud Security engineers who need to have the following level of access to Azure Key Vault:<br>
      <ul> <li>SecUserC must be able to view private keys.</li>
      </ul>
      You need to assign specific built-in RBAC role to each user whilst following the principle of least privilege.<br><br>
      Which role should you assign to user? `,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: `
          Assign the Key Vault Crypto Service Encryption User role to SecUserC,`,
          correct: false,
        },
        {
          code: "B",
          content: `Assign the Key Vault Administrator role to SecUserC`,
          correct: false,
        },
        {
          code: "C",
          content: ` Assign the Key Vault Secrets User role to SecUserC`,
          correct: true,
        },
        {
          code: "D",
          content: `Assign the Key Vault Secrets Officer role to SecUserC`,
          correct: false,
        },
      ],
      explanation: `You should assign the <strong>Key Vault Secrets User role</strong> to SecUserC. This user needs access to view private keys, and this role meets that need without broader permissions.`,
      category: "Azure RBAC / Key Vault",
    },
    {
      code: "Q41",
      content: `You are an IT Administrator for an organization that has a Microsoft Entra tenant. The organization uses role-based access control (RBAC) policies to control access to the Azure Key Vault service.<br><br>
        The organization has recently hired four new Cloud Security engineers who need to have the following level of access to Azure Key Vault:<br>
        <ul>
         <li>SecUserB must be able to read, wrap, and unwrap keys within a vault.</li>
        </ul>
        You need to assign specific built-in RBAC role to each user whilst following the principle of least privilege.<br><br>
        Which role should you assign to user? `,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: `
        Assign the Key Vault Crypto Service Encryption User role to SecUserB,`,
          correct: true,
        },
        {
          code: "B",
          content: `Assign the Key Vault Administrator role to SecUserB`,
          correct: false,
        },
        {
          code: "C",
          content: ` Assign the Key Vault Secrets User role to SecUserB`,
          correct: false,
        },
        {
          code: "D",
          content: `Assign the Key Vault Secrets Officer role to SecUserB`,
          correct: false,
        },
      ],
      explanation: ` You should assign the <strong>Key Vault Crypto Service Encryption User role</strong> to SecUserB. This role grants the ability to read, wrap, and unwrap keys, which aligns with the requirements without over-privileging the user.`,
      category: "Azure RBAC / Key Vault",
    },
    {
      code: "Q41",
      content: `You are an IT Administrator for an organization that has a Microsoft Entra tenant. The organization uses role-based access control (RBAC) policies to control access to the Azure Key Vault service.<br><br>
        The organization has recently hired four new Cloud Security engineers who need to have the following level of access to Azure Key Vault:<br>
        <ul>
          
          <li>SecUserD must be able to perform any action on the secrets of a key vault, except manage permissions.</li>
        </ul>
        You need to assign specific built-in RBAC role to each user whilst following the principle of least privilege.<br><br>
        Which role should you assign to  user?`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: `
        Assign the Key Vault Crypto Service Encryption User role to SecUserD,`,
          correct: false,
        },
        {
          code: "B",
          content: `Assign the Key Vault Administrator role to SecUserD,`,
          correct: false,
        },
        {
          code: "C",
          content: `
          Assign the Key Vault Secrets User role to SecUserD,`,
          correct: false,
        },
        {
          code: "D",
          content: `
          Assign the Key Vault Secrets Officer role to SecUserD`,
          correct: true,
        },
      ],
      explanation: ` You should assign the <strong>Key Vault Secrets Officer role</strong> to SecUserD. This role allows the user to perform all actions on secrets without managing permissions, satisfying the requirement securely and appropriately.`,
      category: "Azure RBAC / Key Vault",
    },
    {
      code: "Q499",
      content: `You are an IT Administrator for an organization that has a Microsoft Entra tenant. The organization uses role-based access control (RBAC) policies to control access to the Azure Key Vault service.<br><br>
        The organization has recently hired four new Cloud Security engineers who need to have the following level of access to Azure Key Vault:<br>
        <ul>
          <li>SecUserA must be able to create and delete key vaults and encryption keys.</li>
        </ul>
        You need to assign specific built-in RBAC role to each user whilst following the principle of least privilege.<br><br>
        Which role should you assign to user?`,
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: `
        Assign the Key Vault Crypto Service Encryption User role to SecUserA,`,
          correct: false,
        },
        {
          code: "B",
          content: `Assign the Key Vault Administrator role to SecUserA`,
          correct: true,
        },
        {
          code: "C",
          content: `
        Assign the Key Vault Secrets User role to SecUserA,`,
          correct: false,
        },
        {
          code: "D",
          content: `
        Assign the Key Vault Secrets Officer role to SecUserA`,
          correct: false,
        },
      ],
      explanation: `You should assign the <strong>Key Vault Administrator role</strong> to SecUserA. This user needs to be able to create and delete key vaults and encryption keys and this role grants those permissions. It follows the principle of least privilege.<br><br>`,
      category: "Azure RBAC / Key Vault",
    },
    {
      code: "Q95442",
      content: `You are an IT technician for a company that has recently migrated its web and application services to Azure.<br><br>
      A manager has attempted to grant a new member of his team access to the Dev Subscription by creating a custom role for the user. However, he receives an error indicating he does not have sufficient privileges to create the custom role.<br><br>
      You need to assign the manager the relevant permissions to their account to meet the requirement. Your solution should adhere to the principle of least privilege access.<br><br>
      Which role should you assign the manager?`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "Owner", correct: false },
        { code: "B", content: "User Access Administrator", correct: true },
        { code: "C", content: "Global Administrator", correct: false },
        { code: "D", content: "Contributor", correct: false },
      ],
      explanation:
        "You should assign the User Access Administrator role to the manager to allow him to create a custom role for a user. Granting this permission to the manager will also allow him to read resources of all types, except secrets, manage authorization, and create and update support tickets. Although this role grants more permissions than needed, it is more restrictive than the Owner role, which would also meet the requirement.<br><br>You should not assign the Global Administrator role to the manager. This is a built-in Microsoft Entra role and would not grant the relevant Azure resource permissions.<br><br>You should not assign the Owner role because, although it grants full access to the resource (including user management), it goes beyond the least privilege principle.<br><br>The Contributor role allows management of Azure resources but does not include user or access control capabilities, so it would not allow creation of custom roles.",
      category: "Azure RBAC / Access Management",
    },
    {
      code: "Q43a",
      content: `You are a support technician for an organization that has an existing Azure subscription, where it hosts virtual machines and storage. You currently use cloud native user accounts, managed by Microsoft Entra ID.<br><br>You currently have the following virtual machines (VMs) hosted within your Azure tenant:<br><br><table class=\"table table-bordered\">
      <thead>
      <tr><th>VM Name</th><th>Operating System (OS)</th></tr>
      </thead>
      <tbody>
      <tr><td>ServerA</td><td>Windows Server 2016 Data Center</td></tr>
      <tr><td>ServerB</td><td>Windows Server 2019 Data Center</td></tr>
      <tr><td>VDIA</td><td>Windows 11 21H2</td></tr>
      <tr><td>ServerC</td><td>Windows Server 2016 Data Center</td></tr>
      <tr><td>VDIB</td><td>Windows 10 1607</td></tr>
      </tbody>
      </table><br>
      You are tasked with assigning the Virtual Machine Administrator Login role to AdminA's Microsoft Entra ID account.<br><br>ServerA and ServerC are running Windows Server 2016 Data Center.<br><br>Will these VMs need to be upgraded to Windows Server 2019 Data Center before AdminA can successfully log in using their Microsoft Entra ID account?`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: true },
        { code: "B", content: "No", correct: false },
      ],
      explanation:
        "Windows Server 2016 Data Center does not support Microsoft Entra ID-based login. To support this functionality, the VMs must be running Windows Server 2019 Data Center or later.",
      category: "Azure VM / Microsoft Entra Login Support",
    },
    {
      code: "Q43b",
      content: `You are a support technician for an organization that has an existing Azure subscription, where it hosts virtual machines and storage. You currently use cloud native user accounts, managed by Microsoft Entra ID.<br><br>You currently have the following virtual machines (VMs) hosted within your Azure tenant:<br><br><table class=\"table table-bordered\">
      <thead>
      <tr><th>VM Name</th><th>Operating System (OS)</th></tr>
      </thead>
      <tbody>
      <tr><td>ServerA</td><td>Windows Server 2016 Data Center</td></tr>
      <tr><td>ServerB</td><td>Windows Server 2019 Data Center</td></tr>
      <tr><td>VDIA</td><td>Windows 11 21H2</td></tr>
      <tr><td>ServerC</td><td>Windows Server 2016 Data Center</td></tr>
      <tr><td>VDIB</td><td>Windows 10 1607</td></tr>
      </tbody>
      </table><br>
      You are evaluating the compatibility of Azure virtual machines with Microsoft Entra ID login.<br><br>Is it true that only Windows 11 virtual machines in Azure will support Microsoft Entra login?`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "Not only Windows 11 VMs support Microsoft Entra login. Windows 10 1809 and later, and Windows Server 2019 Data Center or later, are also supported.",
      category: "Azure VM / Microsoft Entra Login Support",
    },
    {
      code: "Q43c",
      content: `You are a support technician for an organization that has an existing Azure subscription, where it hosts virtual machines and storage. You currently use cloud native user accounts, managed by Microsoft Entra ID.<br><br>You currently have the following virtual machines (VMs) hosted within your Azure tenant:<br><br><table class=\"table table-bordered\">
      <thead>
      <tr><th>VM Name</th><th>Operating System (OS)</th></tr>
      </thead>
      <tbody>
      <tr><td>ServerA</td><td>Windows Server 2016 Data Center</td></tr>
      <tr><td>ServerB</td><td>Windows Server 2019 Data Center</td></tr>
      <tr><td>VDIA</td><td>Windows 11 21H2</td></tr>
      <tr><td>ServerC</td><td>Windows Server 2016 Data Center</td></tr>
      <tr><td>VDIB</td><td>Windows 10 1607</td></tr>
      </tbody>
      </table><br>
      You are checking which VMs will support login with Microsoft Entra ID for AdminA.<br><br>The VM 'VDIB' runs Windows 10 version 1607.<br><br>Will AdminA be able to login to VDIB using their Microsoft Entra ID account?`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "VDIB runs Windows 10 1607, which is not supported for Microsoft Entra ID login to Azure virtual machines. Support starts from Windows 10 version 1809.",
      category: "Azure VM / Microsoft Entra Login Support",
    },
    {
      code: "Q44",
      content:
        "Your company uses Azure to host its production infrastructure.<br><br>There was a security breach last week and passwords stored on a text file were compromised. The breach has been remediated and all passwords have been reset. You recommend implementing Azure Key Vault to securely save passwords and secrets. Additionally, you need to use role-based access control (RBAC) to allow managers to assign roles specifically within Azure Key Vault.<br><br>You need to assign the relevant role to meet the requirements. Your solution should adhere to the principle of least privilege.<br><br><strong>What role should you assign?</strong>",
      isHtmlContent: true,
      options: [
        { code: "A", content: "User Access Administrator", correct: false },
        {
          code: "B",
          content: "Key Vault Data Access Administrator",
          correct: true,
        },
        { code: "C", content: "Key Vault Administrator", correct: false },
        { code: "D", content: "Owner", correct: false },
      ],
      explanation:
        "You should assign the Key Vault Data Access Administrator role to the managers. This role includes both the required permissions: Microsoft.Authorization/roleAssignments/write and Microsoft.Authorization/roleAssignments/delete. It also adheres to the principle of least privilege by limiting access to Azure Key Vault only.<br><br>The Key Vault Administrator role allows management of all data plane operations but not role assignments. The Owner and User Access Administrator roles include broader access to other Azure services and therefore do not meet the principle of least privilege.",
      category: "Azure RBAC / Key Vault",
    },
    {
      code: "Q44a",
      content: `Your company uses Microsoft Entra ID to manage user and guest access to its Microsoft 365 services.<br><br>You have recently enabled Guest access to enable your users to collaborate with another company on projects. The current user setting configuration is shown in the three exhibits.<br><br>One of the new project teams you need to collaborate with have the following requirements:<br><br><table class=\"table table-bordered\">
      <thead>
      <tr><th>Username</th><th>Group Association</th><th>Requirements</th></tr>
      </thead>
      <tbody>
      <tr><td>User-GU-A</td><td>None</td><td><ul><li>Requires same access as UserC</li></ul></td></tr>
      <tr><td>UserA</td><td>AVD-Users, AWS-WS</td><td><ul><li>Should not be able to access preview features for My Apps</li><li>Needs to access LinkedIn with Microsoft Entra ID account</li></ul></td></tr>
      <tr><td>UserB</td><td>AVD-Users</td><td><ul><li>Requires access to My Staff</li><li>Needs to be able to use the combined security information registration experience</li></ul></td></tr>
      <tr><td>UserC</td><td>AWS-WS</td><td><ul><li>Needs to access LinkedIn with the Microsoft Entra ID account</li></ul></td></tr>
      <tr><td>UserD</td><td>AVD-Users</td><td><ul><li>Should not be able to access preview features for My Apps</li><li>Needs to access LinkedIn with the Microsoft Entra ID account</li></ul></td></tr>
      </tbody>
      </table><br><br>
      Some of the users report:<br><ul>
      <li>User-GU-A (guest user) reports that they do not currently have the same access as UserC.</li>
      <li>UserB reports that they cannot use the combined security information registration experience.</li>
      <li>UserD reports that they cannot access LinkedIn with their Microsoft Entra ID account.</li></ul><br>
      You need to update the user settings within Microsoft Entra to meet the users' requirements.<br><br>Should you change Guest User access to be more inclusive to allow UserB access to My Staff?`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "You should not change Guest User access to be more inclusive to allow UserB to access to My Staff. With the current configuration of the User Settings and User Features, as shown in the three exhibits, Guest user access is set to limit access to properties and memberships of directory objects, however these settings do not allow access to My Staff. UserB needs to be added to the AWS-WS group to allow this access.",
      category: "Microsoft Entra Guest Access Management",
    },
    {
      code: "Q44b",
      content: `Your company uses Microsoft Entra ID to manage user and guest access to its Microsoft 365 services.<br><br>You have recently enabled Guest access to enable your users to collaborate with another company on projects. The current user setting configuration is shown in the three exhibits.<br><br>One of the new project teams you need to collaborate with have the following requirements:<br><br><table class=\"table table-bordered\">
      <thead>
      <tr><th>Username</th><th>Group Association</th><th>Requirements</th></tr>
      </thead>
      <tbody>
      <tr><td>User-GU-A</td><td>None</td><td><ul><li>Requires same access as UserC</li></ul></td></tr>
      <tr><td>UserA</td><td>AVD-Users, AWS-WS</td><td><ul><li>Should not be able to access preview features for My Apps</li><li>Needs to access LinkedIn with Microsoft Entra ID account</li></ul></td></tr>
      <tr><td>UserB</td><td>AVD-Users</td><td><ul><li>Requires access to My Staff</li><li>Needs to be able to use the combined security information registration experience</li></ul></td></tr>
      <tr><td>UserC</td><td>AWS-WS</td><td><ul><li>Needs to access LinkedIn with the Microsoft Entra ID account</li></ul></td></tr>
      <tr><td>UserD</td><td>AVD-Users</td><td><ul><li>Should not be able to access preview features for My Apps</li><li>Needs to access LinkedIn with the Microsoft Entra ID account</li></ul></td></tr>
      </tbody>
      </table><br><br>
      Some of the users report:<br><ul>
      <li>User-GU-A (guest user) reports that they do not currently have the same access as UserC.</li>
      <li>UserB reports that they cannot use the combined security information registration experience.</li>
      <li>UserD reports that they cannot access LinkedIn with their Microsoft Entra ID account.</li></ul><br>
      You need to update the user settings within Microsoft Entra to meet the users' requirements.<br><br>Do you need to add User-GU-A to the AWS-WS group to allow them to have the same access as UserC?`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: true },
        { code: "B", content: "No", correct: false },
      ],
      explanation:
        "You should add User-GU-A to the AWS-WS group to allow them to have the same access as UserC. With the current configuration of the User Settings and User Features, the AWS-WS group can connect their accounts to LinkedIn and also use the combined security information registration experience. This is the same access as UserC.",
      category: "Microsoft Entra Guest Access Management",
    },
    {
      code: "Q44c",
      content: `Your company uses Microsoft Entra ID to manage user and guest access to its Microsoft 365 services.<br><br>You have recently enabled Guest access to enable your users to collaborate with another company on projects. The current user setting configuration is shown in the three exhibits.<br><br>One of the new project teams you need to collaborate with have the following requirements:<br><br><table class=\"table table-bordered\">
      <thead>
      <tr><th>Username</th><th>Group Association</th><th>Requirements</th></tr>
      </thead>
      <tbody>
      <tr><td>User-GU-A</td><td>None</td><td><ul><li>Requires same access as UserC</li></ul></td></tr>
      <tr><td>UserA</td><td>AVD-Users, AWS-WS</td><td><ul><li>Should not be able to access preview features for My Apps</li><li>Needs to access LinkedIn with Microsoft Entra ID account</li></ul></td></tr>
      <tr><td>UserB</td><td>AVD-Users</td><td><ul><li>Requires access to My Staff</li><li>Needs to be able to use the combined security information registration experience</li></ul></td></tr>
      <tr><td>UserC</td><td>AWS-WS</td><td><ul><li>Needs to access LinkedIn with the Microsoft Entra ID account</li></ul></td></tr>
      <tr><td>UserD</td><td>AVD-Users</td><td><ul><li>Should not be able to access preview features for My Apps</li><li>Needs to access LinkedIn with the Microsoft Entra ID account</li></ul></td></tr>
      </tbody>
      </table><br><br>
      Some of the users report:<br><ul>
      <li>User-GU-A (guest user) reports that they do not currently have the same access as UserC.</li>
      <li>UserB reports that they cannot use the combined security information registration experience.</li>
      <li>UserD reports that they cannot access LinkedIn with their Microsoft Entra ID account.</li></ul><br>
      You need to update the user settings within Microsoft Entra to meet the users' requirements.<br><br>Is it true that only UserA and UserD can access the Combined Security Information Registration Experience?`,
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "Not only UserA and UserD can access the Combined Security Information Registration Experience. With the current configuration of the User Settings and User Features, the AWS-WS group is selected under the 'Users can use the combined security information registration experience setting'. In this scenario, UserA and UserC are both in the AWS-WS group.",
      category: "Microsoft Entra Guest Access Management",
    },
    {
      code: "QX",
      content:
        'Your company hosts its resources in Azure and uses Microsoft Entra to manage access to its cloud hosted services.<br><br>There has been a recent internal audit on permissions that have been assigned to users, including high-privileged Azure role assignment. The audit has highlighted the following Azure role assignments for administrators:<br><br><table class="table table-bordered">\n<thead>\n<tr><th>Username</th><th>Existing Assigned Azure Role</th></tr>\n</thead>\n<tbody>\n<tr><td>Admin01</td><td>Owner of subscription</td></tr>\n<tr><td>Admin02</td><td>Owner of subscription</td></tr>\n<tr><td>Admin03</td><td>Owner of subscription</td></tr>\n<tr><td>Admin04</td><td>Owner of subscription</td></tr>\n</tbody>\n</table><br>\nYou ask each admin to send you a list of their access requirements and receive the following details:<br><br><table class="table table-bordered">\n<thead>\n<tr><th>Username</th><th>Required Permissions</th></tr>\n</thead>\n<tbody>\n<tr><td>Admin01</td><td><ul><li>Needs access to manage all resources within the subscription.</li><li>Does not need to manage permissions to any resources.</li></ul></td></tr>\n<tr><td>Admin02</td><td><ul><li>Needs to be able to manage access to resources by assigning roles.</li></ul></td></tr>\n<tr><td>Admin03</td><td><ul><li>Needs to be able to view and login to virtual machines via the portal.</li></ul></td></tr>\n<tr><td>Admin04</td><td><ul><li>Needs to be able to create and manage virtual machines and disk.</li></ul></td></tr>\n</tbody>\n</table><br>\nYou assign Admin01 the Contributor role, Admin02 the Role-Based Access Control Administrator role, Admin03 the Virtual Machine Administrator Login, and Admin04 the Reader role. Admin04 reports that they cannot complete any tasks and that their permissions are wrong.<br><br>\nYou need to re-evaluate Admin04\'s required permissions and assign them the correct Azure role. Your solution should adhere to the principle of least privilege.<br><br>\nWhat role should you assign Admin04?',
      isHtmlContent: true,
      options: [
        { code: "A", content: "Virtual Machine Contributor", correct: true },
        { code: "B", content: "Virtual Machine User Login", correct: false },
        {
          code: "C",
          content: "Virtual Machine Administrator Login",
          correct: false,
        },
        { code: "D", content: "Contributor", correct: false },
      ],
      explanation:
        "You should assign Admin04 the Virtual Machine Contributor role. This role assignment enables the user to create and manage virtual machines, manage disks, install and run software, reset password of the root user of the virtual machine using VM extensions, and manage local user accounts using VM extensions. It does not give access to the virtual network the virtual machines are hosted on or the storage account the disk is hosted on. This role fits Admin04 requirements and adheres to the principle of least privilege.<br><br>You should not assign Admin04 the Virtual Machine User Login role. This role assignment allows the user to view virtual machines in the portal and login as a standard user who does not have any administrator permissions. It does not match any of Admin04's requested permissions.<br><br>You should not assign Admin04 the Virtual Machine Administrator Login role. This role assignment allows the user to view virtual machines in the portal and login as administrator rather than a standard user. It does not match any of Admin04's requested permissions.<br><br>You should not assign Admin04 the Contributor role. Although this role assignment would meet Admin04's requested permission requirements, it would also give access to much more. Therefore, assigning this role would not adhere to the principle of least privilege. The Contributor role gives the user full access to manage all resources but does not allow you to assign roles in Azure RBAC, manage assignments in Azure Blueprints, or share image galleries.",
      category: "Azure Role Assignment / Least Privilege",
    },
    {
      code: "QX-a",
      content:
        "You are preparing to deploy the Global Secure Access client across your organization. Before starting the deployment, you need to ensure you meet all the prerequisites and understand any limitations that might affect the rollout.<br><br>You need to consider key factors to successfully deploy the Global Secure Access client.<br><br>Can the Global Secure Access client be deployed on Azure Virtual Desktop environments with multi-session capabilities?",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "The Global Secure Access client cannot be deployed on Azure Virtual Desktop environments with multi-session capabilities. The Global Secure Access client is designed for single-user environments where it can manage network access and enforce device compliance effectively. In Azure Virtual Desktop (AVD) multi-session environments, multiple users share the same virtual machine, which leads to challenges such as session isolation issues, network configuration conflicts, and difficulties in applying security policies on a per-user basis. Due to these complexities, the Global Secure Access client cannot be deployed in AVD multi-session environments.",
      category: "Global Secure Access / Deployment Requirements",
    },
    {
      code: "QX-b",
      content:
        "You are preparing to deploy the Global Secure Access client across your organization. Before starting the deployment, you need to ensure you meet all the prerequisites and understand any limitations that might affect the rollout.<br><br>You need to consider key factors to successfully deploy the Global Secure Access client.<br><br>For a successful deployment of the Global Secure Access client, must devices be either Microsoft Entra joined or Microsoft Entra hybrid joined?",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: true },
        { code: "B", content: "No", correct: false },
      ],
      explanation:
        "For successful deployment of the Global Secure Access client, devices must be either Microsoft Entra joined or Microsoft Entra hybrid joined. This requirement ensures that devices are registered with Microsoft Entra ID, allowing for centralized management and enforcement of security policies. Microsoft Entra joined devices are managed directly through Microsoft Entra ID, while hybrid joined devices are connected to both an on-premises Active Directory and Microsoft Entra ID.",
      category: "Global Secure Access / Deployment Requirements",
    },
    {
      code: "QX-c",
      content:
        "You are preparing to deploy the Global Secure Access client across your organization. Before starting the deployment, you need to ensure you meet all the prerequisites and understand any limitations that might affect the rollout.<br><br>You need to consider key factors to successfully deploy the Global Secure Access client.<br><br>Must local administrator credentials be available on each device for the installation of the Global Secure Access client?",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: true },
        { code: "B", content: "No", correct: false },
      ],
      explanation:
        "Local administrator credentials must be available on each device for the installation of the Global Secure Access client. This is necessary because the installation process makes changes to system settings and network configurations, which can only be done with administrative privileges. Without local admin rights, the installation cannot proceed, as the system needs to ensure that the person performing the installation has sufficient permissions to modify important components on the device.",
      category: "Global Secure Access / Deployment Requirements",
    },
    {
      code: "QX-d",
      content:
        "You are preparing to deploy the Global Secure Access client across your organization. Before starting the deployment, you need to ensure you meet all the prerequisites and understand any limitations that might affect the rollout.<br><br>You need to consider key factors to successfully deploy the Global Secure Access client.<br><br>Does the deployment of the Global Secure Access client support devices that are Microsoft Entra registered?",
      isHtmlContent: true,
      options: [
        { code: "A", content: "Yes", correct: false },
        { code: "B", content: "No", correct: true },
      ],
      explanation:
        "The deployment of the Global Secure Access client does not support devices that are Microsoft Entra registered. Microsoft Entra registered devices are personal devices typically used for bring-your-own-device (BYOD) scenarios, and they are registered with Microsoft Entra ID without being fully managed. Unlike Microsoft Entra joined or hybrid joined devices, which have tighter integration with the organization’s management and security policies, Entra registered devices lack the necessary management controls required for the Global Secure Access client to function properly.",
      category: "Global Secure Access / Deployment Requirements",
    },
    {
      code: "Q984984981",
      content:
        "You are a security architect. You are requested to plan, deploy, and test Microsoft's Security Service Edge. You want to configure and test the environment for a proof of concept (PoC) using a client device.<br><br>You need to identify the necessary configurations for the client device used in testing.<br><br>Which configuration should you identify?",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content:
            "The client device must be connected to a corporate network (corpnet) or VPN.",
          correct: false,
        },
        {
          code: "B",
          content:
            "The client device must be Microsoft Entra joined or hybrid joined.",
          correct: true,
        },
        {
          code: "C",
          content:
            "The client device must have at least two Microsoft 365 groups configured.",
          correct: false,
        },
        {
          code: "D",
          content:
            "The client device must be running Windows Server 2012 R2 or later.",
          correct: false,
        },
      ],
      explanation:
        "You should identify that the client device is Microsoft Entra joined or hybrid joined. Microsoft’s Security Service Edge solution is designed to unify network, identity, and endpoint access controls, allowing secure access to applications and resources from any device, location, or identity. It facilitates and coordinates access policy management for employees, partners, and digital workloads. To be able to configure, test, and use Microsoft’s Security Service Edge solution the client device must be either Microsoft Entra joined or hybrid joined as part of the necessary configuration for deployment.<br><br>You should not identify that the client device is running Windows Server 2012 R2 or later. For testing of Microsoft Entra Private Access, one Windows server should be setup to function as the application server, which will be accessed from the client to test the functionality. The server needs to run Windows Server 2012 R2 or later, not the client.<br><br>You should not identify that the client device is connected to a corporate network (corpnet) or VPN. The purpose of Microsoft’s Security Service Edge solution is to allow secure access to applications and resources from any device, location, or identity. Therefore, it is important to provide real-world conditions to test the functionality by disconnecting the client from the corpnet and provide Internet access only.<br><br>You should not identify that the client device has at least two Microsoft 365 groups configured. Microsoft 365 groups are required for user management in testing, but they are not a configuration requirement for the client device itself.",
      category: "Microsoft Security Service Edge",
    },
    {
      code: "Q298488975",
      content:
        "Your organization implements strict internet access policies. Your Security Operations Center (SOC) analyst needs temporary access to high-risk internet destinations for an incident investigation.<br><br>You need to provide advice to your SOC analyst.<br><br>What should the SOC analyst do next?",
      isHtmlContent: true,
      options: [
        {
          code: "A",
          content: "Contact the IT department directly to request access.",
          correct: false,
        },
        {
          code: "B",
          content:
            "Manually configure their device to bypass the restrictions.",
          correct: false,
        },
        {
          code: "C",
          content: "Use My Access to request the necessary permissions.",
          correct: true,
        },
        {
          code: "D",
          content:
            "Wait for automatic access to be granted by the system based on their job role.",
          correct: false,
        },
      ],
      explanation:
        "The Security Operations Center (SOC) analyst should use My Access to request the necessary permissions. You can use Microsoft Entra Internet Access to configure a security-focused web gateway solution that centers around identity management. This solution is designed to safeguard Software as a Service (SaaS) applications and other internet traffic. In this scenario, after SOC analyst requests necessary permissions in My Access portal, they have to be approved. Upon approval, the system automatically adds the SOC analyst to a group that grants the necessary permissions to access high-risk internet destinations. This process aligns with organization’s strict internet access policies.<br><br>The SOC analyst should not contact the IT department directly to request access. The process for gaining access does not involve contacting the IT department directly. Instead, the SOC analyst should use the designated system, My Access, to request permissions. This ensures that access is granted through the proper, documented channels, maintaining the integrity of the organization’s strict internet access policies.<br><br>The SOC analyst should not manually configure their device to bypass the restrictions. This violates the organization’s policies. Access control should be managed centrally through My Access, not by individual users manually bypassing restrictions. Manually altering device configurations to gain access could lead to security breaches and is not an authorized or secure method.<br><br>The SOC analyst should not wait for automatic access to be granted by the system based on their job role. The SOC analyst must proactively request access through My Access. The system does not automatically grant access based on job roles alone; it requires an explicit request and subsequent approval to ensure that access is granted only when necessary.",
      category: "Microsoft Entra Internet Access",
    },
  ],
};

export default ImplementAuth;
