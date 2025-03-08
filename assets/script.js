document.addEventListener('DOMContentLoaded', () => {
  // Season Tabs (Accordion) Handling
  const seasonTabs = document.querySelectorAll('.season-tabs button');
  const seasonPanels = document.querySelectorAll('.season-panel');

  // Default: Show Season 1
  seasonTabs.forEach(tab => tab.setAttribute('aria-expanded', 'false'));
  seasonPanels.forEach(panel => {
    panel.classList.remove('active');
    panel.setAttribute('hidden', '');
  });
  document.getElementById('season1-tab').setAttribute('aria-expanded', 'true');
  const defaultPanel = document.getElementById('season1-panel');
  defaultPanel.classList.add('active');
  defaultPanel.removeAttribute('hidden');

  seasonTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Collapse all panels
      seasonTabs.forEach(t => t.setAttribute('aria-expanded', 'false'));
      seasonPanels.forEach(panel => {
        panel.classList.remove('active');
        panel.setAttribute('hidden', '');
      });
      // Expand the selected panel
      tab.setAttribute('aria-expanded', 'true');
      const panelId = tab.getAttribute('aria-controls');
      const activePanel = document.getElementById(panelId);
      if (activePanel) {
        activePanel.classList.add('active');
        activePanel.removeAttribute('hidden');
      }
    });
  });

  // Episode Click Handling - update the video player source
  const episodeItems = document.querySelectorAll('.episodes-list li');
  const videoIframe = document.getElementById('videoIframe');

  episodeItems.forEach(item => {
    item.addEventListener('click', () => {
      const newSrc = item.getAttribute('data-link');
      if (newSrc && videoIframe) {
        videoIframe.setAttribute('src', newSrc);
      }
    });
  });
});
