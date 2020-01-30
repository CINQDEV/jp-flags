jQuery(document).ready(function() {
  let dropdown = jQuery('#locality-dropdown');

  dropdown.empty();
  
  dropdown.append('<option selected="true" disabled>Choose Country</option>');
  dropdown.prop('selectedIndex', 0);
  
  const url = 'http://jpi-tmxnews.localhost/wp-content/plugins/jp-flags/assets/js/country_full.json';
 
  console.log(url);
  // Populate dropdown with list of provinces
  jQuery.getJSON(url, function (data) {
    jQuery.each(data, function (key, entry) {
      dropdown.append(jQuery('<option></option>').attr('value', entry.abbreviation).text(entry.name));
    })
  });
  });