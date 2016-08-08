class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.string :name
      t.date :born_on
      t.integer :house_id
      t.timestamps null: false
    end
  end
end
