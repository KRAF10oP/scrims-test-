module.exports = [{ name: "membercount", $if: "v4", aliases: "mc", code: ` $title[1;Member Count] $description[1;**$membersCount**] 
$footer[1;$serverName;$serverIcon]
$color[1;#00D0FF]
$suppressErrors[An error occured while executing this command please report this issue on our support server. https://discord.gg/9V5Eb8W8pT] 
` }]