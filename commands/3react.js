module.exports = [{
name: "",
nonPrefixed: true,
code:'Okay, I have extracted your team name: $noMentionMessage $reply[$messageID;yes] $onlyIf[$mentionedUsersCount==$getServerVar[tctags3];] $addCmdReactions[$if[$mentionedUsersCount>=$getServerVar[tctags3];982999843767210026;956514158759776256]]  $onlyIf[$isBot[$mentioned[1;no]]!=true;] $onlyIf[$isBot[$mentioned[2;no]]!=true;]         $onlyIf[$isBot[$mentioned[3;no]]!=true;]            $onlyIf[$isBot[$mentioned[4;no]]!=true;]                           $onlyIf[$getServerVar[tagcheck3]==$channelID;]                         $suppressErrors[An Error Occured]'
}]
