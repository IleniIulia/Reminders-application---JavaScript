var numberTask = 1;
function addTask() {
  var task = $('#task').val();
  var urgent = $('#urgent').is(':checked');
  var divClass = "card";
  if (urgent) {
    divClass += " alert alert-danger";
  }
  $('#list').append(`
    <div class="` + divClass + `" id = ` + numberTask + `>
    <div class="card-body">
      <div class="card-body">
        <h5>` + task + `</h5>
      </div>
      <div class="card-footer text-muted">
        <a href="#" class="btn btn-danger" onclick="return deleteTask(` + numberTask + `)"><i class="las la-trash"></i></a>
      </div>
    </div>
  </div>`);
  ++numberTask;
  document.getElementById("task").value = "";
  return false;
}

function deleteTask(idTask) {
  $('#' + idTask).remove();
}
