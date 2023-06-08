module.exports = [{
name: "",
nonPrefixed: true,
code:' $giveRole[$guildID;$authorID;$getServerVar[smidp6]] $setServerVar[smslots6;$sub[$getServerVar[smslots6];1]]  $addCmdReactions[$if[$mentionedUsersCount>=$getServerVar[smtags6];982999843767210026;956513467626582046]]           $onlyIf[$isBot[$mentioned[1;no]]!=true;] $onlyIf[$isBot[$mentioned[2;no]]!=true;]         $onlyIf[$isBot[$mentioned[3;no]]!=true;]            $onlyIf[$isBot[$mentioned[4;no]]!=true;] $onlyIf[$getServerVar[smslots6]!=1;{execute:sm7!}] $onlyIf[$mentionedUsersCount==$getServerVar[smtags6];] $onlyIf[$getServerVar[over6]!=1;]  $onlyIf[$getServerVar[smreg6]==$channelID;] $suppressErrors[An Error Occured]       $onlyIf[$getUserVar[scrimbanned;$authorID;$guildID]==0;]'
}]
