module.exports = [{
name: "",
nonPrefixed: true,
code:' $giveRole[$guildID;$authorID;$getServerVar[smidp9]] $setServerVar[smslots9;$sub[$getServerVar[smslots9];1]]  $addCmdReactions[$if[$mentionedUsersCount>=$getServerVar[smtags9];982999843767210026;956513467626582046]]           $onlyIf[$isBot[$mentioned[1;no]]!=true;] $onlyIf[$isBot[$mentioned[2;no]]!=true;]         $onlyIf[$isBot[$mentioned[3;no]]!=true;]            $onlyIf[$isBot[$mentioned[4;no]]!=true;] $onlyIf[$getServerVar[smslots9]!=1;{execute:sm10!}] $onlyIf[$mentionedUsersCount==$getServerVar[smtags9];] $onlyIf[$getServerVar[over9]!=1;]  $onlyIf[$getServerVar[smreg9]==$channelID;] $suppressErrors[An Error Occured]       $onlyIf[$getUserVar[scrimbanned;$authorID;$guildID]==0;]'
}]
