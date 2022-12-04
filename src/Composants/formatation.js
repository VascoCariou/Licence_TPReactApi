export function formatationPersonnage(str) {
    if (str === "ayaka") {
        str = str.replace("ayaka", "kamisato_ayaka");
    } else if (str === "ayato") {
        str = str.replace("ayato", "kamisato_ayato");
    } else if (str === "kazuha") {
        str = str.replace("kazuha", "kaedehara_kazuha");
    } else if (str === "kokomi") {
        str = str.replace("kokomi", "sangonomiya_kokomi");
    } else if (str === "sara") {
        str = str.replace("sara", "kujou_sara");
    } else if (str === "raiden") {
        str = str.replace("raiden", "raiden_shogun");
    }

    str = str.replace("-", "_");
    return str;
}

export function formatationArme(str) {
    if (str === "apprentice-s-notes") {
        str = str.replace("apprentice-s-notes", "apprentices_notes");
    } else if (str === "beginner-s-protector") {
        str = str.replace("beginner-s-protector", "beginners_protector");
    } else if (str === "blackcliff-amulet") {
        str = str.replace("blackcliff-amulet", "blackcliff_agate");
    } else if (str === "primordial-jade-winged-spear") {
        str = str.replace(
            "primordial-jade-winged-spear",
            "primordial_jade_wingedspear"
        );
    } else if (str === "prototype-grudge") {
        str = str.replace("prototype-grudge", "prototype_starglitter");
    } else if (str === "prototype-malice") {
        str = str.replace("prototype-malice", "prototype_amber");
    } else if (str === "seasoned-hunter-s-bow") {
        str = str.replace("seasoned-hunter-s-bow", "seasoned_hunters_bow");
    } else if (str === "sharpshooter-s-oath") {
        str = str.replace("sharpshooter-s-oath", "sharpshooters_oath");
    } else if (str === "snow-tombed-starsilver") {
        str = str.replace("snow-tombed-starsilver", "snowtombed_starsilver");
    } else if (str === "traveler-s-handy-sword") {
        str = str.replace("traveler-s-handy-sword", "travelers_handy_sword");
    } else if (str === "wavebreaker's-fin") {
        str = str.replace("wavebreaker's-fin", "wavebreakers_fin");
    } else if (str === "wolf-s-gravestone") {
        str = str.replace("wolf-s-gravestone", "wolfs_gravestone");
    } else if (str === "cinnabar -spindle") {
        str = str.replace("cinnabar -spindle", "cinnabar_spindle");
    } else if (str === "dragon-s-bane") {
        str = str.replace("dragon-s-bane", "dragons_bane");
    } else if (str === "freedom-sworn") {
        str = str.replace("freedom-sworn", "freedomsworn");
    } else if (str === "hunter-s-bow") {
        str = str.replace("hunter-s-bow", "hunters_bow");
    } else if (str === "kagura's-verity") {
        str = str.replace("kagura's-verity", "kaguras_verity");
    } else if (str === "luxurious-sea-lord") {
        str = str.replace("luxurious-sea-lord", "luxurious_sealord");
    } else if (str === "mouun's-moon") {
        str = str.replace("mouun's-moon", "mouuns_moon");
    } else if (str === "old-merc-s-pal") {
        str = str.replace("old-merc-s-pal", "old_mercs_pal");
    } else if (str === "lion-s-roar") {
        str = str.replace("lion-s-roar", "lions_roar");
    }

    for (let i = 0; i <= 4; i++) {
        str = str.replace("-", "_");
    }
    return str;
}