module.exports = [{
name: "whois",
aliases: "userinfo",
code: '$author[1;$username[$mentioned[1]];$userAvatar[$mentioned[1]]]                         $description[1;**__General Information__**\n<:reflex_dot:978671694426288148> **Name**: $username[$mentioned[1]]\n<:reflex_dot:978671694426288148> **ID**: $mentioned[1]\n<:reflex_dot:978671694426288148> **Account Created**: $creationDate[$mentioned[1]]\n<:reflex_dot:978671694426288148> **Joined Server**: $formatDate[$memberJoinedDate[$mentioned[1]]]\n<:reflex_dot:978671694426288148> **Highest Role**: <@&$highestRole[$mentioned[1]]>\n<:reflex_dot:978671694426288148> **Status**: $status[$mentioned[1]]]                 $footer[1;Requested By $username[$authorID]]                                         $color[1;00FF99]                $onlyIf[$message[1]!=;{newEmbed: {description:**Command**: whois\n**Usage**\nwhois <user>\n**Aliases**\nuserinfo}          $suppressErrors[An Error Occured]'
}]