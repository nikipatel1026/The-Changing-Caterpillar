$(function() {
    $('#restore').hide();
    $("#transform").on('click', function() {
      // Step 3a: Change the heading to be about butterflies
      $("h1").text("The Butterfly");
  
      // Step 3b: Change the paragraph to be about butterflies
      $("#p1").html("This is a <strong>butterfly</strong> in its natural habitat:");
  
      // Step 3c: Change the image to be of a butterfly
      $("img").attr("src", "https://www.kasandbox.org/programming-images/animals/butterfly_monarch.png");
  
      // Step 3d: Change the color of the heading and paragraph
      $("h1, #p1").css("color", "brown");
  
      // Step 3e: Add new content (unordered list with interesting facts)
        var facts = "<ul>" +
        "<li>Butterflies are insects known for their vibrant colors.</li>" +
        "<li>They have unique and intricate wing patterns.</li>" +
        "<li>Butterflies undergo a remarkable metamorphosis from caterpillar to butterfly.</li>" +
        "</ul>";
        $("body").append(facts);
  
      // Step 3f: Modify the link and link text
        $("a[href='https://en.wikipedia.org/wiki/Catepillar']")
        .attr("href", "https://en.wikipedia.org/wiki/Butterfly") // Update the href attribute
        .text("Butterfly"); // Update the link text
  
      // Step 3g: Add class to the paragraph
        $("p:last").addClass("result");
  
      // Show the "Restore" button and hide the "Metamorphose" button
      $('#restore').show();
      $('#transform').hide();
    });
  
    $("#restore").on('click', function() {
      location.reload(true);
    });
  });
  