module.exports = [
  {
name: "config",
aliases: "config",
code: ` $setServerVar[smchannelid;$channelID] $setServerVar[smconfigid;$get[config]] $let[config;$apiMessage[$channelID;;{newEmbed: {description:[Custom Config 1](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Registration Channel**
<#$getServerVar[smreg1]>
2️⃣ **IDP Role**
<@&$getServerVar[smidp1]>
3️⃣ **Number Of Slots**
$getServerVar[smslots1]
4️⃣ **Number Of Tags**
$getServerVar[smtags1]} {footer:React with emojis to setup}{color:GREEN}};{actionRow:{button:1️⃣:2:smone_$authorID:no}{button:2️⃣:2:smtwo_$authorID:no}{button:3️⃣:2:smthree_$authorID:no}{button:4️⃣:2:smfour_$authorID:no}{button:➡️:2:smright_$authorID:no}}{actionRow: {button:Save:success:smsave_$authorID:no}{button:Save & Start Scrims:success:smsaveandstart_$authorID:no}};;;;;yes]] $onlyIf[$getServerVar[smconfigid]==0;{newEmbed: {description:**Config is already running somewhere make sure to save it before running another config.**\n\n**Can’t Find Config Message**❓\nUse \`resetconfig\` **command.**}{color:00FF99}}]   $onlyBotPerms[manageroles;{newEmbed:{description:<:btt_EC_error:956514158759776256> | **$userTag[$authorID]** Bot Requires Manage Role permission(s) to run this command.}{color:2F3136}}]
$onlyBotPerms[managechannel;{newEmbed:{description:<:btt_EC_error:956514158759776256> | **$userTag[$authorID]** Bot Requires Manage Channel permission(s) to run this command.}{color:2F3136}}] $onlyIf[$getServerVar[smsetup]==1;<@$authorID>, This server is not setuped. Use \`setup\` first.]     $onlyPerms[manageserver;<@$authorID>, You Need Manage Server Permission To Execute This Command.]
$suppressErrors[An Error Occured] `
},

{
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smreg1;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Registration Channel In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter registration channel.}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smone;]     $suppressErrors[An Error Occured]`
},
{
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smidp1;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select IDP Role In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter IDP Role}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smtwo;]    $suppressErrors[An Error Occured]`
},
{
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smslots1;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Slots In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter number of slots}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smthree;]     $suppressErrors[An Error Occured]`
},
  {
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smtags1;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Tags In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter number of tags}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smfour;]     $suppressErrors[An Error Occured]`
},
{
type: "interaction",
prototype: "button",
code: `$interactionUpdate[;{newEmbed: {description:[Custom Config 2](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Registration Channel**
<#$getServerVar[smreg2]>
2️⃣ **IDP Role**
<@&$getServerVar[smidp2]>
3️⃣ **Number Of Slots**
$getServerVar[smslots2]
4️⃣ **Number Of Tags**
$getServerVar[smtags2]} {footer:React with emojis to setup}{color:GREEN}};{actionRow:{button:1️⃣:2:smone2_$authorID:no}{button:2️⃣:2:smtwo2_$authorID:no}{button:3️⃣:2:smthree2_$authorID:no}{button:4️⃣:2:smfour2_$authorID:no}{button:➡️:2:smright2_$authorID:no}}{actionRow: {button:Save:success:smsave2_$authorID:no}{button:Save & Start Scrims:success:smsaveandstart2_$authorID:no}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smright;]     $suppressErrors[An Error Occured]`
},
  {
type: "interaction",
prototype: "button",
code: `$resetServerVar[smconfigid] $deleteMessage[$getServerVar[smconfigid];$channelID]                    $interactionReply[;{newEmbed: {description:✅ **Done**}{color:00FF99}};;;;yes] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smsave;]    $suppressErrors[An Error Occured]`
  },  {
type: "interaction",
prototype: "button",
code: `$channelSendMessage[$getServerVar[smsetupchannelid];{newEmbed: {author:$userTag[$authorID]:$userAvatar[$authorID]}{description:Custom1 Started By $userTag[$authorID] for \`@everyone\`}{timestamp}{color:BLUE}}] $modifyChannelPerms[$guildID;$getServerVar[smreg1];+sendmessage] $channelSendMessage[$getServerVar[smreg1];@everyone{newEmbed: {description:📣 **Registration Started**\n📣 **Available Slots**: $getServerVar[smslots1]\n📣 **Required Tags**: $getServerVar[smtags1]}{thumbnail:$serverIcon[$guildID]}{color:00FF99}}]  $resetServerVar[smconfigid] $deleteMessage[$getServerVar[smconfigid];$channelID]                    $interactionReply[;{newEmbed: {description:Registration Started in <#$getServerVar[smreg1]>}{color:00FF99}};;;;yes]
$onlyIf[$getServerVar[over1]==0;<@$interactionData[author.id]>, **USE \`deletescrim 1\` first then retry!**] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smsaveandstart;]   
$suppressErrors[**An Error Occured Or This Config was reseted.**] 
`
  },
  {
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smreg2;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Registration Channel In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter registration channel.}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smone2;]     $suppressErrors[An Error Occured]`
},
{
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smidp2;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select IDP Role In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter IDP Role}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smtwo2;]    $suppressErrors[An Error Occured]`
},
{
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smslots2;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Slots In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter number of slots}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smthree2;]     $suppressErrors[An Error Occured]`
},
  {
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smtags2;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Tags In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter number of tags}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smfour2;]     $suppressErrors[An Error Occured]`
},
  {
type: "interaction",
prototype: "button",
code: `$resetServerVar[smconfigid] $deleteMessage[$getServerVar[smconfigid];$channelID]                    $interactionReply[;{newEmbed: {description:✅ **Done**}{color:00FF99}};;;;yes] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smsave2;]    $suppressErrors[An Error Occured]`
  },{
type: "interaction",
prototype: "button",
code: `$channelSendMessage[$getServerVar[smsetupchannelid];{newEmbed: {author:$userTag[$authorID]:$userAvatar[$authorID]}{description:Custom2 Started By $userTag[$authorID] for \`@everyone\`}{timestamp}{color:BLUE}}] $modifyChannelPerms[$guildID;$getServerVar[smreg2];+sendmessage] $channelSendMessage[$getServerVar[smreg2];@everyone{newEmbed: {description:📣 **Registration Started**\n📣 **Available Slots**: $getServerVar[smslots2]\n📣 **Required Tags**: $getServerVar[smtags2]}{thumbnail:$serverIcon[$guildID]}{color:00FF99}}]  $resetServerVar[smconfigid] $deleteMessage[$getServerVar[smconfigid];$channelID]                    $interactionReply[;{newEmbed: {description:Registration Started in <#$getServerVar[smreg2]>}{color:00FF99}};;;;yes]
$onlyIf[$getServerVar[over2]==0;<@$interactionData[author.id]>, **USE \`deletescrim 2\` first then retry!**] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smsaveandstart2;]   
$suppressErrors[**An Error Occured Or This Config was reseted.**] 
`
  },
    {
type: "interaction",
prototype: "button",
code: `$interactionUpdate[;{newEmbed: {description:[Custom Config 3](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Registration Channel**
<#$getServerVar[smreg3]>
2️⃣ **IDP Role**
<@&$getServerVar[smidp3]>
3️⃣ **Number Of Slots**
$getServerVar[smslots3]
4️⃣ **Number Of Tags**
$getServerVar[smtags3]} {footer:React with emojis to setup}{color:GREEN}};{actionRow:{button:1️⃣:2:smone3_$authorID:no}{button:2️⃣:2:smtwo3_$authorID:no}{button:3️⃣:2:smthree3_$authorID:no}{button:4️⃣:2:smfour3_$authorID:no}{button:➡️:2:smright3_$authorID:no}}{actionRow: {button:Save:success:smsave3_$authorID:no}{button:Save & Start Scrims:success:smsaveandstart3_$authorID:no}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smright2;]     $suppressErrors[An Error Occured]`
},
      {
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smreg3;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Registration Channel In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter registration channel.}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smone3;]     $suppressErrors[An Error Occured]`
      },
   {
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smidp3;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select IDP Role In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter IDP Role}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smtwo3;]    $suppressErrors[An Error Occured]`
},
    {
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smslots3;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Slots In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter number of slots}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smthree3;]     $suppressErrors[An Error Occured]`
},
      {
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smtags3;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Tags In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter number of tags}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smfour3;]     $suppressErrors[An Error Occured]`
},
      {
type: "interaction",
prototype: "button",
code: `$resetServerVar[smconfigid] $deleteMessage[$getServerVar[smconfigid];$channelID]                    $interactionReply[;{newEmbed: {description:✅ **Done**}{color:00FF99}};;;;yes] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smsave3;]    $suppressErrors[An Error Occured]`
  },
    {
type: "interaction",
prototype: "button",
code: `$channelSendMessage[$getServerVar[smsetupchannelid];{newEmbed: {author:$userTag[$authorID]:$userAvatar[$authorID]}{description:Custom3 Started By $userTag[$authorID] for \`@everyone\`}{timestamp}{color:BLUE}}] $modifyChannelPerms[$guildID;$getServerVar[smreg3];+sendmessage] $channelSendMessage[$getServerVar[smreg3];@everyone{newEmbed: {description:📣 **Registration Started**\n📣 **Available Slots**: $getServerVar[smslots3]\n📣 **Required Tags**: $getServerVar[smtags3]}{thumbnail:$serverIcon[$guildID]}{color:00FF99}}]  $resetServerVar[smconfigid] $deleteMessage[$getServerVar[smconfigid];$channelID]                    $interactionReply[;{newEmbed: {description:Registration Started in <#$getServerVar[smreg3]>}{color:00FF99}};;;;yes]
$onlyIf[$getServerVar[over3]==0;<@$interactionData[author.id]>, **USE \`deletescrim 3\` first then retry!**] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smsaveandstart3;]   
$suppressErrors[**An Error Occured Or This Config was reseted.**] 
`
  },
       {
type: "interaction",
prototype: "button",
code: `$interactionUpdate[;{newEmbed: {description:[Custom Config 4](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Registration Channel**
<#$getServerVar[smreg4]>
2️⃣ **IDP Role**
<@&$getServerVar[smidp4]>
3️⃣ **Number Of Slots**
$getServerVar[smslots4]
4️⃣ **Number Of Tags**
$getServerVar[smtags4]} {footer:React with emojis to setup}{color:GREEN}};{actionRow:{button:1️⃣:2:smone4_$authorID:no}{button:2️⃣:2:smtwo4_$authorID:no}{button:3️⃣:2:smthree4_$authorID:no}{button:4️⃣:2:smfour4_$authorID:no}{button:➡️:2:smright4_$authorID:no}}{actionRow: {button:Save:success:smsave4_$authorID:no}{button:Save & Start Scrims:success:smsaveandstart4_$authorID:no}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smright3;]     $suppressErrors[An Error Occured]`
},
    
      {
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smreg4;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Registration Channel In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter registration channel.}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smone4;]     $suppressErrors[An Error Occured]`
      },
       {
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smidp4;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select IDP Role In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter IDP Role}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smtwo4;]    $suppressErrors[An Error Occured]`
},
    
    {
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smslots4;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Slots In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter number of slots}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smthree4;]     $suppressErrors[An Error Occured]`
},
       {
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smtags4;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Tags In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter number of tags}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smfour4;]     $suppressErrors[An Error Occured]`
},
          {
type: "interaction",
prototype: "button",
code: `$resetServerVar[smconfigid] $deleteMessage[$getServerVar[smconfigid];$channelID]                    $interactionReply[;{newEmbed: {description:✅ **Done**}{color:00FF99}};;;;yes] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smsave4;]    $suppressErrors[An Error Occured]`
  },
        {
type: "interaction",
prototype: "button",
code: `$channelSendMessage[$getServerVar[smsetupchannelid];{newEmbed: {author:$userTag[$authorID]:$userAvatar[$authorID]}{description:Custom4 Started By $userTag[$authorID] for \`@everyone\`}{timestamp}{color:BLUE}}] $modifyChannelPerms[$guildID;$getServerVar[smreg4];+sendmessage] $channelSendMessage[$getServerVar[smreg4];@everyone{newEmbed: {description:📣 **Registration Started**\n📣 **Available Slots**: $getServerVar[smslots4]\n📣 **Required Tags**: $getServerVar[smtags4]}{thumbnail:$serverIcon[$guildID]}{color:00FF99}}]  $resetServerVar[smconfigid] $deleteMessage[$getServerVar[smconfigid];$channelID]                    $interactionReply[;{newEmbed: {description:Registration Started in <#$getServerVar[smreg4]>}{color:00FF99}};;;;yes]
$onlyIf[$getServerVar[over4]==0;<@$interactionData[author.id]>, **USE \`deletescrim 4\` first then retry!**] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smsaveandstart4;]   
$suppressErrors[**An Error Occured Or This Config was reseted.**] 
`
  },
           {
type: "interaction",
prototype: "button",
code: `$interactionUpdate[;{newEmbed: {description:[Custom Config 5](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Registration Channel**
<#$getServerVar[smreg5]>
2️⃣ **IDP Role**
<@&$getServerVar[smidp5]>
3️⃣ **Number Of Slots**
$getServerVar[smslots5]
4️⃣ **Number Of Tags**
$getServerVar[smtags5]} {footer:React with emojis to setup}{color:GREEN}};{actionRow:{button:1️⃣:2:smone5_$authorID:no}{button:2️⃣:2:smtwo5_$authorID:no}{button:3️⃣:2:smthree5_$authorID:no}{button:4️⃣:2:smfour5_$authorID:no}{button:➡️:2:smright5_$authorID:no}}{actionRow: {button:Save:success:smsave5_$authorID:no}{button:Save & Start Scrims:success:smsaveandstart5_$authorID:no}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smright4;]     $suppressErrors[An Error Occured]`
},
          {
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smreg5;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Registration Channel In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter registration channel.}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smone5;]     $suppressErrors[An Error Occured]`
      },
       {
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smidp5;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select IDP Role In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter IDP Role}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smtwo5;]    $suppressErrors[An Error Occured]`
},
        {
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smslots5;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Slots In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter number of slots}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smthree5;]     $suppressErrors[An Error Occured]`
},
           {
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smtags5;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Tags In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter number of tags}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smfour5;]     $suppressErrors[An Error Occured]`
},
              {
type: "interaction",
prototype: "button",
code: `$resetServerVar[smconfigid] $deleteMessage[$getServerVar[smconfigid];$channelID]                    $interactionReply[;{newEmbed: {description:✅ **Done**}{color:00FF99}};;;;yes] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smsave5;]    $suppressErrors[An Error Occured]`
  },
            {
type: "interaction",
prototype: "button",
code: `$channelSendMessage[$getServerVar[smsetupchannelid];{newEmbed: {author:$userTag[$authorID]:$userAvatar[$authorID]}{description:Custom5 Started By $userTag[$authorID] for \`@everyone\`}{timestamp}{color:BLUE}}] $modifyChannelPerms[$guildID;$getServerVar[smreg5];+sendmessage] $channelSendMessage[$getServerVar[smreg5];@everyone{newEmbed: {description:📣 **Registration Started**\n📣 **Available Slots**: $getServerVar[smslots5]\n📣 **Required Tags**: $getServerVar[smtags5]}{thumbnail:$serverIcon[$guildID]}{color:00FF99}}]  $resetServerVar[smconfigid] $deleteMessage[$getServerVar[smconfigid];$channelID]                    $interactionReply[;{newEmbed: {description:Registration Started in <#$getServerVar[smreg5]>}{color:00FF99}};;;;yes]
$onlyIf[$getServerVar[over5]==0;<@$interactionData[author.id]>, **USE \`deletescrim 5\` first then retry!**] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smsaveandstart5;]   
$suppressErrors[**An Error Occured Or This Config was reseted.**] 
`
  },
               {
type: "interaction",
prototype: "button",
code: `$interactionUpdate[;{newEmbed: {description:[Custom Config 6](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Registration Channel**
<#$getServerVar[smreg6]>
2️⃣ **IDP Role**
<@&$getServerVar[smidp6]>
3️⃣ **Number Of Slots**
$getServerVar[smslots6]
4️⃣ **Number Of Tags**
$getServerVar[smtags6]} {footer:React with emojis to setup}{color:GREEN}};{actionRow:{button:1️⃣:2:smone6_$authorID:no}{button:2️⃣:2:smtwo6_$authorID:no}{button:3️⃣:2:smthree6_$authorID:no}{button:4️⃣:2:smfour6_$authorID:no}{button:➡️:2:smright7_$authorID:no}}{actionRow: {button:Save:success:smsave6_$authorID:no}{button:Save & Start Scrims:success:smsaveandstart6_$authorID:no}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smright5;]     $suppressErrors[An Error Occured]`
},
             {
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smreg6;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Registration Channel In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter registration channel.}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smone6;]     $suppressErrors[An Error Occured]`
      },
           {
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smidp6;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select IDP Role In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter IDP Role}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smtwo6;]    $suppressErrors[An Error Occured]`
},
            {
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smslots6;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Slots In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter number of slots}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smthree6;]     $suppressErrors[An Error Occured]`
},
               {
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smtags6;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Tags In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter number of tags}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smfour6;]     $suppressErrors[An Error Occured]`
},
    
              {
type: "interaction",
prototype: "button",
code: `$resetServerVar[smconfigid] $deleteMessage[$getServerVar[smconfigid];$channelID]                    $interactionReply[;{newEmbed: {description:✅ **Done**}{color:00FF99}};;;;yes] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smsave6;]    $suppressErrors[An Error Occured]`
  },
                {
type: "interaction",
prototype: "button",
code: `$channelSendMessage[$getServerVar[smsetupchannelid];{newEmbed: {author:$userTag[$authorID]:$userAvatar[$authorID]}{description:Custom6 Started By $userTag[$authorID] for \`@everyone\`}{timestamp}{color:BLUE}}] $modifyChannelPerms[$guildID;$getServerVar[smreg6];+sendmessage] $channelSendMessage[$getServerVar[smreg6];@everyone{newEmbed: {description:📣 **Registration Started**\n📣 **Available Slots**: $getServerVar[smslots6]\n📣 **Required Tags**: $getServerVar[smtags6]}{thumbnail:$serverIcon[$guildID]}{color:00FF99}}]  $resetServerVar[smconfigid] $deleteMessage[$getServerVar[smconfigid];$channelID]                    $interactionReply[;{newEmbed: {description:Registration Started in <#$getServerVar[smreg6]>}{color:00FF99}};;;;yes]
$onlyIf[$getServerVar[over6]==0;<@$interactionData[author.id]>, **USE \`deletescrim 6\` first then retry!**] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smsaveandstart6;]   
$suppressErrors[**An Error Occured Or This Config was reseted.**] 
`
  },
                   {
type: "interaction",
prototype: "button",
code: `$interactionUpdate[;{newEmbed: {description:[Custom Config 7](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Registration Channel**
<#$getServerVar[smreg7]>
2️⃣ **IDP Role**
<@&$getServerVar[smidp7]>
3️⃣ **Number Of Slots**
$getServerVar[smslots7]
4️⃣ **Number Of Tags**
$getServerVar[smtags7]} {footer:React with emojis to setup}{color:GREEN}};{actionRow:{button:1️⃣:2:smone7_$authorID:no}{button:2️⃣:2:smtwo7_$authorID:no}{button:3️⃣:2:smthree7_$authorID:no}{button:4️⃣:2:smfour7_$authorID:no}{button:➡️:2:smright8_$authorID:no}}{actionRow: {button:Save:success:smsave7_$authorID:no}{button:Save & Start Scrims:success:smsaveandstart7_$authorID:no}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smright7;]     $suppressErrors[An Error Occured]`
},
                 {
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smreg7;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Registration Channel In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter registration channel.}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smone7;]     $suppressErrors[An Error Occured]`
      },
               {
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smidp7;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select IDP Role In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter IDP Role}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smtwo7;]    $suppressErrors[An Error Occured]`
},
                {
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smslots7;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Slots In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter number of slots}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smthree7;]     $suppressErrors[An Error Occured]`
},
                   {
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smtags7;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Tags In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter number of tags}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smfour7;]     $suppressErrors[An Error Occured]`
},
                  {
type: "interaction",
prototype: "button",
code: `$resetServerVar[smconfigid] $deleteMessage[$getServerVar[smconfigid];$channelID]                    $interactionReply[;{newEmbed: {description:✅ **Done**}{color:00FF99}};;;;yes] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smsave7;]    $suppressErrors[An Error Occured]`
  },
                    {
type: "interaction",
prototype: "button",
code: `$channelSendMessage[$getServerVar[smsetupchannelid];{newEmbed: {author:$userTag[$authorID]:$userAvatar[$authorID]}{description:Custom7 Started By $userTag[$authorID] for \`@everyone\`}{timestamp}{color:BLUE}}] $modifyChannelPerms[$guildID;$getServerVar[smreg7];+sendmessage] $channelSendMessage[$getServerVar[smreg7];@everyone{newEmbed: {description:📣 **Registration Started**\n📣 **Available Slots**: $getServerVar[smslots7]\n📣 **Required Tags**: $getServerVar[smtags7]}{thumbnail:$serverIcon[$guildID]}{color:00FF99}}]  $resetServerVar[smconfigid] $deleteMessage[$getServerVar[smconfigid];$channelID]                    $interactionReply[;{newEmbed: {description:Registration Started in <#$getServerVar[smreg7]>}{color:00FF99}};;;;yes]
$onlyIf[$getServerVar[over7]==0;<@$interactionData[author.id]>, **USE \`deletescrim 7\` first then retry!**] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smsaveandstart7;]   
$suppressErrors[**An Error Occured Or This Config was reseted.**] 
`
  },
                       {
type: "interaction",
prototype: "button",
code: `$interactionUpdate[;{newEmbed: {description:[Custom Config 8](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Registration Channel**
<#$getServerVar[smreg8]>
2️⃣ **IDP Role**
<@&$getServerVar[smidp8]>
3️⃣ **Number Of Slots**
$getServerVar[smslots8]
4️⃣ **Number Of Tags**
$getServerVar[smtags8]} {footer:React with emojis to setup}{color:GREEN}};{actionRow:{button:1️⃣:2:smone8_$authorID:no}{button:2️⃣:2:smtwo8_$authorID:no}{button:3️⃣:2:smthree8_$authorID:no}{button:4️⃣:2:smfour8_$authorID:no}{button:➡️:2:smright9_$authorID:no}}{actionRow: {button:Save:success:smsave8_$authorID:no}{button:Save & Start Scrims:success:smsaveandstart8_$authorID:no}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smright8;]     $suppressErrors[An Error Occured]`
},
                     {
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smreg8;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Registration Channel In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter registration channel.}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smone8;]     $suppressErrors[An Error Occured]`
      },
                   {
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smidp8;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select IDP Role In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter IDP Role}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smtwo8;]    $suppressErrors[An Error Occured]`
},
                    {
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smslots8;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Slots In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter number of slots}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smthree8;]     $suppressErrors[An Error Occured]`
},
                       {
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smtags8;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Tags In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter number of tags}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smfour8;]     $suppressErrors[An Error Occured]`
},
                      {
type: "interaction",
prototype: "button",
code: `$resetServerVar[smconfigid] $deleteMessage[$getServerVar[smconfigid];$channelID]                    $interactionReply[;{newEmbed: {description:✅ **Done**}{color:00FF99}};;;;yes] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smsave8;]    $suppressErrors[An Error Occured]`
  },
                       {
type: "interaction",
prototype: "button",
code: `$channelSendMessage[$getServerVar[smsetupchannelid];{newEmbed: {author:$userTag[$authorID]:$userAvatar[$authorID]}{description:Custom8 Started By $userTag[$authorID] for \`@everyone\`}{timestamp}{color:BLUE}}] $modifyChannelPerms[$guildID;$getServerVar[smreg8];+sendmessage] $channelSendMessage[$getServerVar[smreg8];@everyone{newEmbed: {description:📣 **Registration Started**\n📣 **Available Slots**: $getServerVar[smslots8]\n📣 **Required Tags**: $getServerVar[smtags8]}{thumbnail:$serverIcon[$guildID]}{color:00FF99}}]  $resetServerVar[smconfigid] $deleteMessage[$getServerVar[smconfigid];$channelID]                    $interactionReply[;{newEmbed: {description:Registration Started in <#$getServerVar[smreg8]>}{color:00FF99}};;;;yes]
$onlyIf[$getServerVar[over8]==0;<@$interactionData[author.id]>, **USE \`deletescrim 8\` first then retry!**] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smsaveandstart8;]   
$suppressErrors[**An Error Occured Or This Config was reseted.**] 
`
  },
            {
type: "interaction",
prototype: "button",
code: `$interactionUpdate[;{newEmbed: {description:[Custom Config 9](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Registration Channel**
<#$getServerVar[smreg9]>
2️⃣ **IDP Role**
<@&$getServerVar[smidp9]>
3️⃣ **Number Of Slots**
$getServerVar[smslots9]
4️⃣ **Number Of Tags**
$getServerVar[smtags9]} {footer:React with emojis to setup}{color:GREEN}};{actionRow:{button:1️⃣:2:smone9_$authorID:no}{button:2️⃣:2:smtwo9_$authorID:no}{button:3️⃣:2:smthree9_$authorID:no}{button:4️⃣:2:smfour9_$authorID:no}{button:➡️:2:smright10_$authorID:no}}{actionRow: {button:Save:success:smsave9_$authorID:no}{button:Save & Start Scrims:success:smsaveandstart9_$authorID:no}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smright9;]     $suppressErrors[An Error Occured]`
},
                     {
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smreg9;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Registration Channel In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter registration channel.}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smone9;]     $suppressErrors[An Error Occured]`
      },
                     {
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smidp9;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select IDP Role In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter IDP Role}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smtwo9;]    $suppressErrors[An Error Occured]`
},
                     {
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smslots9;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Slots In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter number of slots}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smthree9;]     $suppressErrors[An Error Occured]`
},   
                        {
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smtags9;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Tags In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter number of tags}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smfour9;]     $suppressErrors[An Error Occured]`
}, 
                     {
type: "interaction",
prototype: "button",
code: `$resetServerVar[smconfigid] $deleteMessage[$getServerVar[smconfigid];$channelID]                    $interactionReply[;{newEmbed: {description:✅ **Done**}{color:00FF99}};;;;yes] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smsave9;]    $suppressErrors[An Error Occured]`
  },
                           {
type: "interaction",
prototype: "button",
code: `$channelSendMessage[$getServerVar[smsetupchannelid];{newEmbed: {author:$userTag[$authorID]:$userAvatar[$authorID]}{description:Custom9 Started By $userTag[$authorID] for \`@everyone\`}{timestamp}{color:BLUE}}] $modifyChannelPerms[$guildID;$getServerVar[smreg9];+sendmessage] $channelSendMessage[$getServerVar[smreg9];@everyone{newEmbed: {description:📣 **Registration Started**\n📣 **Available Slots**: $getServerVar[smslots9]\n📣 **Required Tags**: $getServerVar[smtags9]}{thumbnail:$serverIcon[$guildID]}{color:00FF99}}]  $resetServerVar[smconfigid] $deleteMessage[$getServerVar[smconfigid];$channelID]                    $interactionReply[;{newEmbed: {description:Registration Started in <#$getServerVar[smreg9]>}{color:00FF99}};;;;yes]
$onlyIf[$getServerVar[over9]==0;<@$interactionData[author.id]>, **USE \`deletescrim 9\` first then retry!**] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smsaveandstart9;]   
$suppressErrors[**An Error Occured Or This Config was reseted.**] 
`
  },
                {
type: "interaction",
prototype: "button",
code: `$interactionUpdate[;{newEmbed: {description:[Custom Config 10](https://discord.gg/ntXjGrCSMQ)\n1️⃣ **Registration Channel**
<#$getServerVar[smreg10]>
2️⃣ **IDP Role**
<@&$getServerVar[smidp10]>
3️⃣ **Number Of Slots**
$getServerVar[smslots10]
4️⃣ **Number Of Tags**
$getServerVar[smtags10]} {footer:React with emojis to setup}{color:GREEN}};{actionRow:{button:1️⃣:2:smone10_$authorID:no}{button:2️⃣:2:smtwo10_$authorID:no}{button:3️⃣:2:smthree10_$authorID:no}{button:4️⃣:2:smfour10_$authorID:no}        }{actionRow: {button:Save:success:smsave10_$authorID:no}{button:Save & Start Scrims:success:smsaveandstart10_$authorID:no}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smright10;]     $suppressErrors[An Error Occured]`
},
                         {
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smreg10;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Registration Channel In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter registration channel.}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smone10;]     $suppressErrors[An Error Occured]`
      },
                         {
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smidp10;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select IDP Role In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter IDP Role}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smtwo10;]    $suppressErrors[An Error Occured]`
},
                         {
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smslots10;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Slots In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter number of slots}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smthree10;]     $suppressErrors[An Error Occured]`
},   
                            {
type: "interaction",
prototype: "button",
code: `$awaitMessages[$channelID;$authorID;1m;everything;smtags10;<@$interactionData[author.id]>     {newEmbed: {description:You Failed To Select Tags In Time, Try Again!}{color:RED}}{delete:2s}]  $interactionReply[;{newEmbed: {description:Enter number of tags}{color:GREEN}}] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smfour10;]     $suppressErrors[An Error Occured]`
}, 
                         {
type: "interaction",
prototype: "button",
code: `$resetServerVar[smconfigid] $deleteMessage[$getServerVar[smconfigid];$channelID]                    $interactionReply[;{newEmbed: {description:✅ **Done**}{color:00FF99}};;;;yes] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smsave10;]    $suppressErrors[An Error Occured]`
  },
                               {
type: "interaction",
prototype: "button",
code: `$channelSendMessage[$getServerVar[smsetupchannelid];{newEmbed: {author:$userTag[$authorID]:$userAvatar[$authorID]}{description:Custom10 Started By $userTag[$authorID] for \`@everyone\`}{timestamp}{color:BLUE}}] $modifyChannelPerms[$guildID;$getServerVar[smreg10];+sendmessage] $channelSendMessage[$getServerVar[smreg10];@everyone{newEmbed: {description:📣 **Registration Started**\n📣 **Available Slots**: $getServerVar[smslots10]\n📣 **Required Tags**: $getServerVar[smtags10]}{thumbnail:$serverIcon[$guildID]}{color:00FF99}}]  $resetServerVar[smconfigid] $deleteMessage[$getServerVar[smconfigid];$channelID]                    $interactionReply[;{newEmbed: {description:Registration Started in <#$getServerVar[smreg10]>}{color:00FF99}};;;;yes]
$onlyIf[$getServerVar[over10]==0;<@$interactionData[author.id]>, **USE \`deletescrim 10\` first then retry!**] $onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"embeds":"{newEmbed:{description:You cannot use this button!}{color:RED}}", "ephemeral":true, "options":{"interaction":true}
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==smsaveandstart10;]   
$suppressErrors[**An Error Occured Or This Config was reseted.**] 
`
  },
]