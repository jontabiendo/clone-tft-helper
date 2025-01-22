import React from "react";

async function RiotFile() {
    const file = await fetch('//riot.txt', {
        method: "GET",
    })

    return file
}

export default RiotFile;