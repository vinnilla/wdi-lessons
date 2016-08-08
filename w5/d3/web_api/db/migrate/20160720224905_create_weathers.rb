class CreateWeathers < ActiveRecord::Migration[5.0]
  def change
    create_table :weathers do |t|
      t.string :city
      t.date :date
      t.integer :temperature

      t.timestamps
    end
  end
end
