const container = document.getElementById('drag-area');
            let drag = false;
            let startDragX, startDragY = 0;
            let startContentX, startContentY = 0;

            container.onmousedown = (e) => {
            container.style.cursor = 'grabbing'
            drag = true;
            startDragX = e.x
            startDragY = e.y
            startContentX = container.scrollLeft
            startContentY = container.scrollTop
            };

            container.onmouseup = () => {
            container.style.cursor = 'grab'
            drag = false;
            };

            // TODO: Handle case when drag outside the container
            container.onmousemove = (e) => {
            e.preventDefault();
            if (!drag) return;
            
            container.scrollLeft = startContentX + startDragX - e.x
            container.scrollTop = startContentY + startDragY - e.y
            };

            var isDragging = false;
            $('.genre').mousedown(function() {
                isDragging = false;
            })
            .mousemove(function() {
                isDragging = true;
            })
            .mouseup(function() {
                var wasDragging = isDragging;
                isDragging = false;
                if (!wasDragging) {
                    console.log('click');
                    $('#paint').css({'z-index':'100'});
                }
            }).mouseenter(function() {
                $(this).stop().animate({'background-color':'#000'})
            }).mouseleave(function() {
                $(this).stop().animate({'background-color':'#fff'})
            });