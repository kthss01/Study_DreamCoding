// bad
function deleteUser(id, softDelete = false) {
    // if (softDelete) {
    //     // don't delete from db but only mark as deleted.
    //     return this._softDelete(id);
    // }
    return db.removeById(id);
}

// database쪽에 다 업데이트 해줘야함
