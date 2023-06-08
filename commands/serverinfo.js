module.exports = [{
name: "serverinfo",
aliases: "si",
code: `$author[1;$serverName[$guildID]'s Information] $description[1;**__About__**
**Name** : $serverName[$guildID]
**ID** : $guildID
**Owner** <:Discord_Verified_Owner:987318425758105600> : $userTag[$ownerID] (<@$ownerID>)
**Verification Level** : $serverVerificationLevel[$guildID]
**Created At** : $creationDate[$guildID]
**Members** : $membersCount[$guildID;;no] ($botCount[$guildID] Bots)
**Banned** : $banCount
**__Features__**
$serverFeatures[$guildID]
**__Channels__**
Total: $channelCount[$guildID;all]
Channels: <:channel:987604124348600380> $channelCount[$guildID;Text] | <:voice:987604218661699594> $channelCount[$guildID;Voice]
**__Emoji Info__**
Regular: $emojiCount[$guildID;normal;no]
Animated: $emojiCount[$guildID;animated;no]
Total Emoji: $emojiCount[$guildID;all;no]
**__Boost Status__**
$serverBoostLevel[$guildID] [<:nitro_boost:987608082639093800> $serverBoostCount]
**__Server Roles__** **[$roleCount[$guildID]]**
$guildRoles[$guildID;mention] $image[1;$serverBanner[$guildID]] $footer[1;Requested By $userTag[$authorID];$userAvatar[$authorID]] $thumbnail[1;$serverIcon[$guildID]] $color[1;2F3136]`
}]