# Fabric Operations Console

# Short Description
Hyperledger Fabric Operations Console code used in the IBM Blockchain Platform Offering.

# Scope of Lab
Hyperledger Fabric Operations Console used in the IBM Blockchain Platform Offering.

The console provides the following high level function:

- Ability to import and manage all Hyperledger Fabric Components from a single web console, no matter where they are located.
- Maintain complete control over identities, channels, and smart contracts.
- Join Peers to Channels and view channel membership as well as individual transactions and channel details.
- Register, view, delete, and re-enroll CA Users.
- View Ordering cluster and node information as well as view and modify consortium and channel membership.
- View and modify channel capabilites and ordering service parameters.
- Install and Instantiate chaincode.  Supports both 1.x and 2.x Lifecycle.
- View, Create, Import and Export Organizations and Identities.
- Role Based Access Control in UI to tightly control which Console users can perform which operations.

The console relies on [GRPC web](https://grpc.io/docs/platforms/web/) to allow GRPC based communication with Orderers and Peers via Node.js.  Management of Certificate Authorities is done via REST API and does not require a GRPC Web Instance.

For more Information see the [documentation for the current IBM production offerings](https://cloud.ibm.com/docs/blockchain-sw-252?topic=blockchain-sw-252-ibp-console-govern) which are driven by the code in this Lab proposal.
