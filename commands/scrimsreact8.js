module.exports = [{
name: "",
nonPrefixed: true,
code:' $giveRole[$guildID;$authorID;$getServerVar[smidp8]] $setServerVar[smslots8;$sub[$getServerVar[smslots8];1]]  $addCmdReactions[$if[$mentionedUsersCount>=$getServerVar[smtags8];982999843767210026;956513467626582046]]           $onlyIf[$isBot[$mentioned[1;no]]!=true;] $onlyIf[$isBot[$mentioned[2;no]]!=true;]         $onlyIf[$isBot[$mentioned[3;no]]!=true;]            $onlyIf[$isBot[$mentioned[4;no]]!=true;] $onlyIf[$getServerVar[smslots8]!=1;{execute:sm9!}] $onlyIf[$mentionedUsersCount==$getServerVar[smtags8];] $onlyIf[$getServerVar[over8]!=1;]  $onlyIf[$getServerVar[smreg8]==$channelID;] $suppressErrors[An Error Occured]       $onlyIf[$getUserVar[scrimbanned;$authorID;$guildID]==0;]'
}]
