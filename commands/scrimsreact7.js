module.exports = [{
name: "",
nonPrefixed: true,
code:' $giveRole[$guildID;$authorID;$getServerVar[smidp7]] $setServerVar[smslots7;$sub[$getServerVar[smslots7];1]]  $addCmdReactions[$if[$mentionedUsersCount>=$getServerVar[smtags7];982999843767210026;956513467626582046]]           $onlyIf[$isBot[$mentioned[1;no]]!=true;] $onlyIf[$isBot[$mentioned[2;no]]!=true;]         $onlyIf[$isBot[$mentioned[3;no]]!=true;]            $onlyIf[$isBot[$mentioned[4;no]]!=true;] $onlyIf[$getServerVar[smslots7]!=1;{execute:sm8!}] $onlyIf[$mentionedUsersCount==$getServerVar[smtags7];] $onlyIf[$getServerVar[over7]!=1;]  $onlyIf[$getServerVar[smreg7]==$channelID;] $suppressErrors[An Error Occured]       $onlyIf[$getUserVar[scrimbanned;$authorID;$guildID]==0;]'
}]
