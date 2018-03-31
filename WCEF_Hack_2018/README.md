# NuCypher Bridge

[Demo Video](https://www.youtube.com/watch?v=aTqlrfJKOZw)

## Abstract
The NuCypher Bridge web interface enables users to easily encrypt their data with the NuCypher KMS. Once encrypted the user can simply store that data on their favorite cloud platform. The bridge gives users the flexibility to govern and monitor access of their encrypted files by requiring that those who wish to decrypt the data to user the platform as well. This requirement ensures that all users maintain the same robust feature set that comes with using the NuCypher KMS without sacrificing privacy. 

## Usecases

Sample usecase ranges from personal free users to entities with a large database---databases they want to encrypt with keys stored in the NuCypher KMS Ledger. For example, a credit score agency could store an entire database of credit reports using our service. They don't need access to these individual reports. Once they receive an inquiry for a certain credit report, then the request could be accepted. Once accepted, the platform sends a request to the Ledger for a miner to re-encrypt a file so it's accessible by the inquirer's private key. After a set timeframe, the file would be inaccessible.

## Features
### Initial features
•	Easily Invite Users by email  
•	Send “Trust” requests (public key access)  
•	Popular platform Integration  
o	Amazon S3  
o	IPFS  
o	Google Drive  
o	Dropbox  
•	Access Controls  
o	Timed  
•	Seed Generation  

### Planned features
•	API access  
•	Access Controls expanded  
o	Smart contract integration  
o	Fiat payment gates  
o	Metered Access  
•	Additional Security  
o	2FA  
o	Challenge Access  
o	Browser Security Check  
♣	Alerts for new users  
♣	Warnings to existing users  
•	File Storage  
