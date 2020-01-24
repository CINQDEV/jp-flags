<?php
function add_dm_button() {
add_thickbox();
echo '<a href="#TB_inline.modal-dm?width=900&height=550&inlineId=modal-dm" id="insert-dm" class="thickbox button ">
<span class="dashicons dashicons-flag"></span> Add Flag</a>';
}
add_action('media_buttons', 'add_dm_button', 15);
?>