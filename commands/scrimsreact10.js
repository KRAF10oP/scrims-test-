module.exports = [{
name: "",
nonPrefixed: true,
code:' $giveRole[$guildID;$authorID;$getServerVar[smidp10]] $setServerVar[smslots10;$sub[$getServerVar[smslots10];1]]  $addCmdReactions[$if[$mentionedUsersCount>=$getServerVar[smtags10];982999843767210026;956513467626582046]]           $onlyIf[$isBot[$mentioned[1;no]]!=true;] $onlyIf[$isBot[$mentioned[2;no]]!=true;]         $onlyIf[$isBot[$mentioned[3;no]]!=true;]            $onlyIf[$isBot[$mentioned[4;no]]!=true;] $onlyIf[$getServerVar[smslots10]!=1;{execute:sm11!}] $onlyIf[$mentionedUsersCount==$getServerVar[smtags10];] $onlyIf[$getServerVar[over10]!=1;]  $onlyIf[$getServerVar[smreg10]==$channelID;] $suppressErrors[An Error Occured]       $onlyIf[$getUserVar[scrimbanned;$authorID;$guildID]==0;]'
}]
