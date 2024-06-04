$(function()
  {
    checked_amenity = {};

    $("input").change(function() {
      let amenity_id = $(this).data('id');
      let amenity_name = $(this).data('name');

      if ($(this).is(":checked")) {
        checked_amenity[amenity_id] = amenity_name;
        } else {
            delete checked_amenity[amenity_id];
            }
      });

      function updateAmenitiesH4() {
        const amenityList = Object.values(checked_amenity).join(', ');
        $('.amenities h4').text(amenityList);
        }
  });
