module.exports = [{ name: "leaveguild", $if: "v4", code: ` $sendMessage[Done] $botLeave[$message[1]] $onlyForIds[726326726078103622;dev only cmd] ` }]