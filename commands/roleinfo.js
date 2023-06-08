module.exports = [{
name: "roleinfo",
aliases: "ri",
code: `$title[1;Members with role $roleName[$findRole[$message[1]];$guildID]] $description[1;$usersWithRole[$findRole[$message[1]];$guildID;mention;
]] $footer[1;Requested By $userTag[$authorID];$userAvatar[$authorID]] $color[1;2F3136]                 $onlyIf[$roleExists[$findRole[$message[1]];$guildID]==true;{newEmbed: {description:Role you mentioned doesnt exists.}{color:BLUE}}]             $onlyIf[$message[1]!=;{newEmbed: {description:**Command**: roleinfo\n**Description**: Check who has the mentioned role\n**Usage**: roleinfo <role>\n**Aliases**: ri\n**Examples**: \`Command has no examples.\`}{color:2F3136}}] $onlyBotPerms[manageroles;<@$authorID>, I need manage role perm to execute this command.]         $onlyPerms[manageroles;<@$authorID>, You require manage role perm to execute this command.]`
}]