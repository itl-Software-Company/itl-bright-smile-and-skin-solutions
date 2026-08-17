const { onCall } = require("firebase-functions/v2/https");

exports.generateSocialDraft = onCall((request) => {
  const { title, excerpt } = request.data;
  
  if (!title || !excerpt) {
    return { draft: "Error: Missing title or excerpt." };
  }

  const draft = `🌟 Exciting news from Bright Smile! 🌟\n\nWe've just published a new guide: "${title}".\n\n${excerpt}\n\nRead the full article on our website! Link in bio. ✨\n\n#BrightSmileAndSkin #NewcastleUnderLyme #StaffordshireAesthetics #BeautyTreatments`;

  return { draft };
});
