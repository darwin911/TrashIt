class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :weight
      t.integer :lat
      t.integer :lng
      t.string :img_url

      t.timestamps
    end
  end
end
