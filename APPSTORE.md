# SSBv1 Support for Homey

This Project allows Control of SSBv1 devices via [Homey](https://www.athom.com/en/) over TCP/IP

## Requirements

- [openWebif](https://github.com/E2OpenPlugins/e2openplugin-OpenWebif) needs to be available on the device
- Setup of SSBv1 App via [Homey](https://www.athom.com/en/) required.
   Start Homey App, open the More section, select Apps Menu, open SSBv1 entry and Click on "Configure app"

## Support Overview

[ ] = not yet supported

[x] = support available

### when / trigger flowcards

[ ] polling required, therefor currently not decided. If you like to put in arguments, visit [Athom Community](https://community.athom.com/t/SSBv1-dvb-boxes-support/9427)

### and / condition flowcards

[ ] Power is ON

[ ] Power is OFF

[ ] Radio mode is used

[ ] TV mode is used

[ ] ...to be continued if you have ideas, visit [Athom Community](https://community.athom.com/t/SSBv1-dvb-boxes-support/9427) and let me know

### then / action flowcards

[x] deep standby mode -> ATTENTION: see below

[x] reboot SSBv1 software

[x] reboot receiver

[x] send command as ID (see below for Info)

[x] send message  -> ATTENTION: see below

[x] standby mode

[x] standby wake

[x] Volume mute

[x] Volume set (0% - 100%)

[x] Volume unmute

[ ] ...to be continued if you have ideas, visit [Athom Community](https://community.athom.com/t/SSBv1-dvb-boxes-support/9427) and let me know

### Supported Languages

[ ] dutch [Contribute here](https://community.athom.com/t/SSBv1-dvb-boxes-support/9427) or file a pull request on GitHub

[x] english

[x] german

## deep standby mode

**WARNING:**
After this flowcard is executed you can't control the box over the Network Interface anymore!

## Messages

During the Input you need to make sure you follow these Format:
    Type|Timeout|Message
inbetween the different Sections no Spaces are required.
Here are the different Supported Variables:
Type:
  - 0 = Yes / No (currently only Display, no action yet implemented)
  - 1 = Info Message
  - 2 = Plain Message
  - 3 = Attention Message
Timeout:
  - set it to 0 to be endless displayed or Provide Time in seconds
Message:
  - Type your Text here, to make a new line use \n in the Text without a Space afterwards.

## For Supported Devices check the following

Due to limited access to all SSBv1 enabled devices, i was only able to test the functions at an Dreambox 800HDse and a few less on an VU+ duo2, if any Issues are observed, please file an Issue on [GitHub](https://github.com/carp3-noctem/eu.carp3-noctem.SSBv1/issues) or Post to the [Athom Community Forum Topic](https://community.athom.com/t/SSBv1-dvb-boxes-support/9427).

1. Check Google Spreadsheet: [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1DlcXXRLvs-AKHAxlF2KolwLmICR3OC4liS-9Cn0K48c/edit?usp=sharing)
   Green = Fully Supported  
   empty Green = Not Programmed in this Device
2. Pictures of the Boxes can be found here: [OpenWebif Box Pictures](https://github.com/E2OpenPlugins/e2openplugin-OpenWebif/tree/master/plugin/public/images/boxes)
3. Pictures of the Remotes can be found here: [OpenWebif Remote Pictures](https://github.com/E2OpenPlugins/e2openplugin-OpenWebif/tree/master/plugin/public/images/remotes)





.