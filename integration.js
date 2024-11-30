const TARGET_CONTAINER_ID = "feature-requests-component";
const boardId = "cm2ue30lh00013jauvv96u7la";

function loadFeatureFlowRoadmap() {
  const sessionKey = Math.random().toString(36).substring(2); // Generate a unique session key

  // Create a script element
  const script = document.createElement("script");
  script.src = `https://featureflow.tech/roadmapwidget/widget.js?sessionKey=${sessionKey}&boardId=${boardId}`;
  
  // Set the onLoad callback
  script.onload = () => {
    if (window.loadFeatureFlow) {
      window.loadFeatureFlow(TARGET_CONTAINER_ID, boardId);
    } else {
      console.error("FeatureFlow widget did not load correctly.");
    }
  };

  // Append the script to the document
  document.body.appendChild(script);

  // Create the target container
  const container = document.getElementById(TARGET_CONTAINER_ID);
  if (!container) {
    const div = document.createElement("div");
    div.id = TARGET_CONTAINER_ID;
    document.body.appendChild(div);
  }
}

// Call the function to load the roadmap
loadFeatureFlowRoadmap();